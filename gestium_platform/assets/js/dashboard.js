document.addEventListener("DOMContentLoaded", () => {
    const folderList = document.getElementById("folderList");
    const loadFoldersButton = document.getElementById("loadFolders");
    const addFolderButton = document.getElementById("addFolder");

    // Cargar carpetas desde el servidor
    loadFoldersButton.addEventListener("click", async () => {
        const response = await fetch("http://localhost:3000/api/folders");
        const folders = await response.json();
        folderList.innerHTML = "";
        folders.forEach(folder => {
            const li = document.createElement("li");
            li.textContent = folder.name;
            folderList.appendChild(li);
        });
    });

    // Añadir una nueva carpeta
    addFolderButton.addEventListener("click", async () => {
        const folderName = prompt("Nombre de la nueva carpeta:");
        if (!folderName) return;
        await fetch("http://localhost:3000/api/folders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: folderName }),
        });
        loadFoldersButton.click();
    });
});
