// data

// Crear un array vacío para almacenar usuarios
var users = [];

// Agregar dos usuarios al array
users[0] = { name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123' };
users[1] = { name: 'Campa Nilla', email: 'campa@nilla.com', password: '123123123' };

// register view

// Obtener el elemento HTML con el id 'register-view'
var registerView = document.getElementById('register-view');

// Ocultar la vista de registro
registerView.style.display = 'none';

// navigation to login

// Obtener el elemento con el id 'login-link' dentro de la vista de registro
var loginLink = registerView.querySelector('#login-link');

// Agregar un controlador de eventos al hacer clic en el enlace de inicio de sesión
loginLink.onclick = function (event) {
    event.preventDefault();

    // Ocultar la vista de registro y mostrar la vista de inicio de sesión
    registerView.style.display = 'none';
    loginView.style.display = '';
};

// submit for register

// Obtener el formulario de registro dentro de la vista de registro
var registerForm = registerView.querySelector('#register-form');

// Agregar un controlador de eventos al enviar el formulario de registro
registerForm.onsubmit = function (event) {
    event.preventDefault();

    // Obtener los campos de entrada de nombre, correo electrónico y contraseña
    var nameInput = registerForm.querySelector('#name-input');
    var emailInput = registerForm.querySelector('#email-input');
    var passwordInput = registerForm.querySelector('#password-input');

    // Obtener los valores ingresados por el usuario
    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    // Crear un objeto de usuario con los datos ingresados
    var user = {};
    user.name = name;
    user.email = email;
    user.password = password;

    // Agregar el usuario al array de usuarios
    users.push(user);

    // Limpiar los campos de entrada
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    // Ocultar la vista de registro y mostrar la vista de inicio de sesión
    registerView.style.display = 'none';
    loginView.style.display = '';
};

// login view

// Obtener el elemento HTML con el id 'login-view'
var loginView = document.getElementById('login-view');

// Mostrar la vista de inicio de sesión
loginView.style.display = '';

// navigation to register

// Obtener el elemento con el id 'register-link' dentro de la vista de inicio de sesión
var registerLink = loginView.querySelector('#register-link');

// Agregar un controlador de eventos al hacer clic en el enlace de registro
registerLink.onclick = function (event) {
    event.preventDefault();

    // Ocultar la vista de inicio de sesión y mostrar la vista de registro
    loginView.style.display = 'none';
    registerView.style.display = '';
};

// submit login

// Obtener el formulario de inicio de sesión dentro de la vista de inicio de sesión
var loginForm = loginView.querySelector('#login-form');

// Agregar un controlador de eventos al enviar el formulario de inicio de sesión
loginForm.onsubmit = function (event) {
    event.preventDefault();

    // Obtener los campos de entrada de correo electrónico y contraseña
    var emailInput = loginForm.querySelector('#email-input');
    var passwordInput = loginForm.querySelector('#password-input');

    // Obtener los valores ingresados por el usuario
    var email = emailInput.value;
    var password = passwordInput.value;

    // Inicializar una variable para almacenar al usuario encontrado
    var foundUser = null;

    // Recorrer la lista de usuarios para encontrar un usuario con el correo electrónico proporcionado
    for (var i = 0; i < users.length; i++) {
        var user = users[i];

        if (user.email === email) {
            foundUser = user;
            break;
        }
    }

    // Verificar si se encontró un usuario con el correo electrónico proporcionado
    if (foundUser === null) {
        alert('Credenciales incorrectas');
        return;
    }

    // Verificar si la contraseña proporcionada coincide con la contraseña del usuario encontrado
    if (foundUser.password !== password) {
        alert('Credenciales incorrectas');
        return;
    }

    // Limpiar los campos de entrada
    emailInput.value = '';
    passwordInput.value = '';

    // Ocultar la vista de inicio de sesión y mostrar la vista de inicio
    loginView.style.display = 'none';
    homeView.style.display = '';
};

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
