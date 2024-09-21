// Obtiene el elemento del checkbox
const menuToggle = document.getElementById('menu-toggle');

// Obtiene el menú de navegación
const navMenu = document.querySelector('nav ul');

// Escucha el evento de cambio en el checkbox
menuToggle.addEventListener('change', () => {
    // Si el checkbox está seleccionado, agrega la clase 'show' al menú
    if (menuToggle.checked) {
        navMenu.classList.add('show');
    } else {
        navMenu.classList.remove('show'); // Quita la clase si no está seleccionado
    }
});
