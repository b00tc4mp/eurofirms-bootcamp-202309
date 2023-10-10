// home view

// Obtener el elemento HTML con el id 'home-view'
var homeView = document.getElementById('home-view');

// Ocultar la vista de inicio
homeView.style.display = 'none';

// Obtener el botón de cierre de sesión dentro de la vista de inicio
var logoutButton = homeView.querySelector('#logout-button');

// Agregar un controlador de eventos al hacer clic en el botón de cierre de sesión
logoutButton.onclick = function () {
    // Ocultar la vista de inicio y mostrar la vista de inicio de sesión
    homeView.style.display = 'none';
    loginView.style.display = '';
};