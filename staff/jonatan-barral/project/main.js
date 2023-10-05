// Obtenemos referencias a elementos HTML por su ID
var loginView = document.getElementById('login-view') // La vista de inicio de sesión
var reprisesView = document.getElementById('reprises-view') // La vista de reprises
var eventsView = document.getElementById('events-view') // La vista de eventos
var headView = document.getElementById('head-view') // La vista principal
var loginButton = document.getElementById('login-button') // El botón de inicio de sesión

// Obtenemos el formulario de inicio de sesión dentro de la vista de inicio de sesión
var loginForm = loginView.querySelector('#login-form')

// Asignamos una función al evento "submit" del formulario de inicio de sesión
loginForm.onsubmit = function (event) {
    event.preventDefault() // Evita el comportamiento predeterminado del formulario (recargar la página)

    // Obtenemos los valores ingresados en los campos de nombre y contraseña
    var nameLogin = event.target['user'].value
    var passwordLogin = event.target['password-login'].value

    // Imprimimos los valores en la consola
    console.log(nameLogin, passwordLogin)
}

// Obtenemos el elemento que permite navegar a la vista principal desde la vista de inicio de sesión
var navigateToHead = loginView.querySelector('#head-view-navigate')

// Asignamos una función al evento "submit" del elemento de navegación a la vista principal
navigateToHead.onsubmit = function (event) {
    event.preventDefault() // Evita el comportamiento predeterminado del formulario (recargar la página)

    // Ocultamos la vista de inicio de sesión y mostramos la vista principal
    loginView.classList.add('off')
    headView.classList.remove('off')
}
