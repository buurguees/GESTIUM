const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require("path");

const foldersPath = path.join(__dirname, "../private/folders.json");

// Leer carpetas
router.get("/", (req, res) => {
    fs.readFile(foldersPath, "utf8", (err, data) => {
        if (err) return res.status(500).send("Error al leer las carpetas.");
        const folders = JSON.parse(data || "[]");
        res.json(folders);
    });
});

// Crear una nueva carpeta
router.post("/", (req, res) => {
    const { name, parentId } = req.body;
    if (!name) return res.status(400).send("El nombre es obligatorio.");
    
    fs.readFile(foldersPath, "utf8", (err, data) => {
        if (err) return res.status(500).send("Error al leer las carpetas.");

        const folders = JSON.parse(data || "[]");
        const newFolder = {
            id: Date.now(),
            name,
            parentId: parentId || null, // Carpeta raíz si no tiene parentId
            children: [],
        };

        if (parentId) {
            const parentFolder = folders.find(folder => folder.id === parentId);
            if (!parentFolder) return res.status(404).send("Carpeta padre no encontrada.");
            parentFolder.children.push(newFolder);
        } else {
            folders.push(newFolder);
        }

        fs.writeFile(foldersPath, JSON.stringify(folders, null, 2), (err) => {
            if (err) return res.status(500).send("Error al guardar la carpeta.");
            res.status(201).json(newFolder);
        });
    });
});

// Renombrar carpeta
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { newName } = req.body;

    if (!newName) return res.status(400).send("El nuevo nombre es obligatorio.");

    fs.readFile(foldersPath, "utf8", (err, data) => {
        if (err) return res.status(500).send("Error al leer las carpetas.");

        const folders = JSON.parse(data || "[]");
        const folder = findFolderById(folders, parseInt(id));

        if (!folder) return res.status(404).send("Carpeta no encontrada.");
        folder.name = newName;

        fs.writeFile(foldersPath, JSON.stringify(folders, null, 2), (err) => {
            if (err) return res.status(500).send("Error al renombrar la carpeta.");
            res.status(200).send("Carpeta renombrada.");
        });
    });
});

// Eliminar carpeta
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    fs.readFile(foldersPath, "utf8", (err, data) => {
        if (err) return res.status(500).send("Error al leer las carpetas.");

        let folders = JSON.parse(data || "[]");
        folders = deleteFolderById(folders, parseInt(id));

        fs.writeFile(foldersPath, JSON.stringify(folders, null, 2), (err) => {
            if (err) return res.status(500).send("Error al eliminar la carpeta.");
            res.status(200).send("Carpeta eliminada.");
        });
    });
});

// Funciones auxiliares
function findFolderById(folders, id) {
    for (const folder of folders) {
        if (folder.id === id) return folder;
        const found = findFolderById(folder.children || [], id);
        if (found) return found;
    }
    return null;
}

function deleteFolderById(folders, id) {
    return folders.filter(folder => folder.id !== id).map(folder => ({
        ...folder,
        children: deleteFolderById(folder.children || [], id),
    }));
}

module.exports = router;
