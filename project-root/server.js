const express = require("express");
const fs = require("fs");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const dataDir = path.join(__dirname, "data");
const rootFile = path.join(dataDir, "root.json");

// Crear directorio de datos si no existe
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// Ruta para cargar la estructura principal
app.get("/api/root", (req, res) => {
    if (!fs.existsSync(rootFile)) {
        fs.writeFileSync(rootFile, JSON.stringify([]));
    }
    fs.readFile(rootFile, "utf-8", (err, data) => {
        if (err) {
            console.error("Error al leer root.json:", err);
            res.status(500).json({ error: "Error al leer los datos." });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Ruta para guardar la estructura principal
app.post("/api/root", (req, res) => {
    const updatedData = req.body;

    fs.writeFile(rootFile, JSON.stringify(updatedData, null, 2), (err) => {
        if (err) {
            console.error("Error al guardar root.json:", err);
            res.status(500).json({ error: "Error al guardar los datos." });
        } else {
            io.emit("update", updatedData); // Notificar a todos los usuarios conectados
            res.status(200).json({ message: "Datos guardados correctamente." });
        }
    });
});

// Ruta para guardar datos del proyecto
app.post("/api/project", (req, res) => {
    const { projectPath, projectData } = req.body;

    const projectFile = path.join(dataDir, `${projectPath}.json`);
    fs.writeFile(projectFile, JSON.stringify(projectData, null, 2), (err) => {
        if (err) {
            console.error("Error al guardar el proyecto:", err);
            res.status(500).json({ error: "Error al guardar el proyecto." });
        } else {
            io.emit("update-project", { projectPath, projectData }); // Notificar cambios
            res.status(200).json({ message: "Proyecto guardado correctamente." });
        }
    });
});

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// WebSockets para cambios en tiempo real
io.on("connection", (socket) => {
    console.log("Usuario conectado.");
    socket.on("disconnect", () => {
        console.log("Usuario desconectado.");
    });
});
