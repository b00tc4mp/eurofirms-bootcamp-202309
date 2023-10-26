// LOGIN VIEW, div que contiene el formulario de login
var loginView = document.getElementById('login-view');

loginView.style.display = ''

// NAVIGATION TO REGISTER, enlace para navegar a la página de registro
var registerLink = loginView.querySelector('#register-link');

registerLink.onclick = function (event){
    event.preventDefault();

    loginView.style.display = 'none'
    registerView.style.display = ''
}

// SUBMIT FOR LOGIN, entregar el login, enviar el login
var loginForm = loginView.querySelector('#login-form')

loginForm.onsubmit = function (event){
    event.preventDefault()

    var emailLogin = loginForm.querySelector('#email-login')
    var passwordLogin = loginForm.querySelector('#password-login')

    var email = emailLogin.value
    var password = passwordLogin.value

    try{
        authenticateUser(email, password)

        loginForm.reset();

        loggedInEmail = email

        loginView.style.display = 'none'

    // RENDER USER NAME IN HEADER
    var userNameSpan = homeView.querySelector('#user-name-span')
    var user = retrieveUser(email)
    userNameSpan.innerText = user.name
    // RENDER POSTS

    renderPost()

    homeView.style.display = ''

}catch (error){
    alert(error.message)
}
}