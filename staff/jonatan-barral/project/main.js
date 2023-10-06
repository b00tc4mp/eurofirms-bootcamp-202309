// Obtenemos referencias a elementos HTML por su ID
var loginView = document.getElementById('login-view'); // La vista de inicio de sesión
loginView.style.display = '';

var reprisesView = document.getElementById('reprises-view'); // La vista de reprises
reprisesView.style.display = 'none';

var eventsView = document.getElementById('events-view'); // La vista de eventos
eventsView.style.display = 'none';

var headView = document.getElementById('head-view'); // La vista principal
headView.style.display = 'none';

// data
var users = [];

users[0] = { name: 'JuezC',  password: '123123123' };
users[1] = { name: 'secretaria', password: '123123123' };

// Obtenemos el formulario de inicio de sesión dentro de la vista de inicio de sesión
var loginForm = loginView.querySelector('#login-form');
loginForm.onsubmit = function (event) {
    event.preventDefault();

    var usernameInput = loginForm.querySelector('#user');
    var passwordInput = loginForm.querySelector('#password-login');

    var username = usernameInput.value;
    var password = passwordInput.value;

    var foundUser = null;

    for (var i = 0; i < users.length; i++) {
        var user = users[i];

        if (user.name === username) {  // Cambia "email" a "name"
            foundUser = user;
            break;
        }
    }

    if (foundUser === null) {
        alert('Credenciales incorrectas');
        return;
    }

    if (foundUser.password !== password) {
        alert('Credenciales incorrectas');
        return;
    }

    usernameInput.value = '';
    passwordInput.value = '';

    loginView.style.display = 'none';
    headView.style.display = '';
}