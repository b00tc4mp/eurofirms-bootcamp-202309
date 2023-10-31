// login view

// Obtener el elemento HTML con el id 'login-view'
loginView = document.getElementById('login-view');

// Mostrar la vista de inicio de sesión
loginView.style.display = '';

// navigation to register

// Obtener el elemento con el id 'register-link' dentro de la vista de inicio de sesión
registerLink = loginView.querySelector('#register-link');

// Agregar un controlador de eventos al hacer clic en el enlace de registro
registerLink.onclick = function (event) {
    event.preventDefault();

    // Ocultar la vista de inicio de sesión y mostrar la vista de registro
    loginView.style.display = 'none';
    registerView.style.display = '';
};

// submit login

// Obtener el formulario de inicio de sesión dentro de la vista de inicio de sesión
loginForm = loginView.querySelector('#login-form');

// Agregar un controlador de eventos al enviar el formulario de inicio de sesión
loginForm.onsubmit = function (event) {
    event.preventDefault();

    // Obtener los campos de entrada de correo electrónico y contraseña
    var emailInput = loginForm.querySelector('#email-input');
    var passwordInput = loginForm.querySelector('#password-input');

    // Obtener los valores ingresados por el usuario
    var email = emailInput.value;
    var password = passwordInput.value;

    try {
        authenticateUser(email, password)

        loginForm.reset()

        loggedInEmail = email

        loginView.style.display = "none"

        var userNameSpan = homeView.querySelector('#user-name-span')

        var user = retrieveUser(email)

        userNameSpan.innerText = user.name

        //renderPost

        renderPosts()

        homeView.style.display = ""

    }
    catch (error) {
        alert(error.message)
    }
    // Ocultar la vista de inicio de sesión y mostrar la vista de inicio


}