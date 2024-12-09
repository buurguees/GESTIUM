document.addEventListener("DOMContentLoaded", () => {
    loadHeaderActions();
});

function loadHeaderActions() {
    // Acción para el botón de notificaciones
    document.getElementById('notifications-btn').addEventListener('click', () => {
        alert('No tienes notificaciones nuevas.');
    });

    // Acción para el botón de perfil
    document.getElementById('profile-btn').addEventListener('click', () => {
        window.location.href = "../pages/profile.html";
    });

    // Acción para la barra de búsqueda
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        console.log(`Buscando: ${query}`);
        // Implementa lógica de búsqueda aquí
    });
}
