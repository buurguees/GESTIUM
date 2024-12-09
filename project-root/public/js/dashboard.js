document.addEventListener("DOMContentLoaded", () => {
    const folderList = document.getElementById("folder-list");
    const newFolderButton = document.getElementById("btn-new-folder");
    const newProjectButton = document.getElementById("btn-new-project");
    const mainTitle = document.getElementById("main-title");

    let folders = [];

    const renderFolders = () => {
        folderList.innerHTML = "";
        folders.forEach((folder, index) => {
            const li = document.createElement("li");
            li.textContent = folder.name;
            li.addEventListener("click", () => enterFolder(folder, index));
            folderList.appendChild(li);
        });
    };

    const enterFolder = (folder, index) => {
        mainTitle.textContent = `Carpeta: ${folder.name}`;
        folderList.innerHTML = "";
        if (folder.subfolders.length === 0) {
            folder.subfolders.push({ name: "Nueva Subcarpeta", subfolders: [] });
        }
        folder.subfolders.forEach((subfolder, subIndex) => {
            const li = document.createElement("li");
            li.textContent = subfolder.name;
            li.addEventListener("click", () => enterFolder(subfolder, subIndex));
            folderList.appendChild(li);
        });

        const backButton = document.createElement("button");
        backButton.textContent = "🔙 Atrás";
        backButton.addEventListener("click", () => {
            renderFolders();
            mainTitle.textContent = "Bienvenido a Gestium";
        });
        folderList.appendChild(backButton);
    };

    newFolderButton.addEventListener("click", () => {
        const folderName = prompt("Ingrese el nombre de la nueva carpeta:");
        if (folderName) {
            folders.push({ name: folderName, subfolders: [] });
            renderFolders();
        }
    });

    newProjectButton.addEventListener("click", () => {
        const projectName = prompt("Ingrese el nombre del nuevo proyecto:");
        if (projectName) {
            folders.push({ name: projectName, subfolders: [], isProject: true });
            renderFolders();
        }
    });

    renderFolders();
});
