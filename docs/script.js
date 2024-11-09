// Récupère les éléments
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Ajoute un événement au toggle
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
