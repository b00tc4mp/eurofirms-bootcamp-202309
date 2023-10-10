
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