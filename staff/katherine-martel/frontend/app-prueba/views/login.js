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
    var user = null;

    // Recorrer la lista de usuarios para encontrar un usuario con el correo electrónico proporcionado
    //for (var i = 0; i < users.length; i++) {
    // var user = users[i];

    //  if (user.email === email) {
    //foundUser = user;
    //     break;
    // }
    // }

    // Verificar si se encontró un usuario con el correo electrónico proporcionado
    // if (foundUser === null) {
    //     alert('Credenciales incorrectas');
    //    return;
    // }

    // Verificar si la contraseña proporcionada coincide con la contraseña del usuario encontrado
    //  if (foundUser.password !== password) {
    //     alert('Credenciales incorrectas');
    //    return;
    //}

    // Limpiar los campos de entrada
    emailInput.value = '';
    passwordInput.value = '';

    try {
        authenticateUser(email, password)
        loginForm.reset()
        loggedInEmail = email
        loginView.style.display = "none"

        var userNameSpan = homeView.querySelector('#user-name-span')
        var user = retrieverUser(email)
        userNameSpan.innerText = user.name
        //renderPost()
        homeView.style.display = ""
        loginView.style.display = 'none';

        var userNameSpan = homeView.querySelector('#user-name-span');
        userNameSpan.innerText = user.name

        loggedInEmail = user.email

        var postList = homeView.querySelector('#post-list');

        for (var i = posts.length - 1; i >= 0; i--) {
            var post = posts[i]

            var article = document.createElement('article');
            article.setAttribute('class', 'post-article');

            var span = document.createElement('span');
            span.innerText = post.author;

            var image = document.createElement('img'); // <img>
            image.setAttribute('class', 'post-image'); // <img class='post-image>
            image.src = post.image;  // <img class='post-image' src='...url'>
            image.alt = post.text  // <img class='post-image' src='...url' alt='text>

            var paragraph = document.createElement('p');
            paragraph.innerText = post.text; // <p>innerText<p/>

            article.appendChild(span);
            article.appendChild(image);
            article.appendChild(paragraph);

            postList.appendChild(article);
        }

        homeView.style.display = '';
    }
    catch (error) {
        alert(error.message)
    }
    // Ocultar la vista de inicio de sesión y mostrar la vista de inicio


}