document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadSidebar();
    setupFolderActions();
});

// Cargar el Header
document.addEventListener("DOMContentLoaded", () => {
    fetch('/gestium_platform/components/header/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            loadHeaderActions(); // Activa las acciones después de cargar
        })
        .catch(error => console.error('Error cargando el header:', error));
});


// Cargar el Sidebar
function loadSidebar() {
    fetch('../components/sidebar/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            populateFolders();
        })
        .catch(error => console.error('Error cargando el sidebar:', error));
}

// Cargar las carpetas dinámicamente
function populateFolders() {
    fetch('../private/data/folders.json')
        .then(response => response.json())
        .then(folders => {
            const folderList = document.getElementById('folder-list');
            folderList.innerHTML = '';
            folders.forEach(folder => {
                const li = document.createElement('li');
                li.textContent = folder.name;
                folderList.appendChild(li);
            });
        })
        .catch(error => console.error('Error cargando las carpetas:', error));
}

// Configurar acciones para crear carpetas y proyectos
function setupFolderActions() {
    document.getElementById('new-folder').addEventListener('click', () => {
        const folderName = prompt('Nombre de la nueva carpeta:');
        if (folderName) {
            // Aquí puedes guardar la carpeta en `folders.json`
            console.log(`Nueva carpeta creada: ${folderName}`);
        }
    });

    document.getElementById('new-project').addEventListener('click', () => {
        alert('Abrir formulario para nuevo proyecto');
    });
}
