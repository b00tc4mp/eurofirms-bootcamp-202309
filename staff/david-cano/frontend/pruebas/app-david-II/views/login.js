// LOGIN VIEW, div que contiene el formulario de login
// Almacena una referencia al elemento DOM con el identificador `login-view`. Este elemento contiene la página de inicio de sesión de la aplicación.
var loginView = document.getElementById('login-view');
// Muestra la página de inicio de sesión.
loginView.style.display = ''

// NAVIGATION TO REGISTER, enlace para navegar a la página de registro
// Almacena una referencia al enlace para navegar a la página de registro.
var registerLink = loginView.querySelector('#register-link');
// Adjunta un manejador de eventos al enlace para navegar a la página de registro.
// Cuando el usuario hace clic en el enlace, se ejecuta la función especificada en el manejador de eventos
registerLink.onclick = function (event){
//Evita que se recargue la página por defecto
    event.preventDefault()
// Oculta la página de inicio de sesión.
    loginView.style.display = 'none'
    // Muestra la página de registro.
    registerView.style.display = ''
}

// SUBMIT FOR LOGIN, entregar el login, enviar el login
// Almacena una referencia al formulario de inicio de sesión.
var loginForm = loginView.querySelector('#login-form')
// Adjunta un manejador de eventos al formulario de inicio de sesión.
// Cuando el usuario envía el formulario, se ejecuta la función especificada en el manejador de eventos.
loginForm.onsubmit = function (event){
//Evita que se recargue la página por defecto
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email-login')
    var passwordInput = loginForm.querySelector('#password-login')
// Obtiene los valores de los campos del formulario.
    var email = emailInput.value
    var password = passwordInput.value
 // Intenta iniciar sesión al usuario.
    try{
        authenticateUser(email, password)
// Limpia el formulario de inicio de sesión.
        loginForm.reset();
// Almacena el correo electrónico del usuario conectado.
        loggedInEmail = email
// Oculta la página de inicio de sesión.
        loginView.style.display = 'none'

    // RENDER USER NAME IN HEADER
    // Obtiene el elemento DOM que contiene el nombre del usuario en el encabezado.
    var userNameSpan = homeView.querySelector('#user-name-span')
    // Obtiene el usuario del servidor.
    var user = retrieveUser(email)
    // Muestra el nombre del usuario en el encabezado.
    userNameSpan.innerText = user.name
    // RENDER POSTS
// Actualiza la lista de posts en la página de inicio.
    renderPost()
// Muestra la página de inicio.
    homeView.style.display = ''
//Recoge los errores, si los hay, y lanza un error
}catch (error){
    alert(error.message)
}
}