// LOGIN VIEW, div que contiene el formulario de login
var loginView = document.getElementById('login-view')

loginView.style.display = ''

// NAVIGATION TO REGISTER, enlace para navegar a la página de registro <a>
var registerLink = loginView.querySelector('#register-link')

registerLink.onclick = function (event) {

    event.preventDefault();

    loginView.style.display = 'none';

    registerView.style.display = '';
}

// SUBMIT FOR LOGIN, entregar el login, enviar el login
var loginForm = loginView.querySelector('#login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email-login')
    var passwordInput = loginForm.querySelector('#password-login')

    var email = emailInput.value
    var password = passwordInput.value

    var foundUser = null

    for (var i = 0; i < users.length; i++) {

        var user = users[i]

        if (user.email === email) {
            foundUser = user
            break
        }
    }

    if (foundUser === null) {
        alert('Wrong credentials')
        return
    }
 
    if (foundUser.password !== password) {
        alert('Wrong credentials')
        return
    }

    emailInput.value = ''
    passwordInput.value = ''

    loginView.style.display = 'none'

    // RENDER USER NAME IN HEADER

    var userNameSpan = homeView.querySelector('#user-name-span')
    userNameSpan.innerText = foundUser.name

    loggedInEmail = foundUser.email 

    // RENDER POSTS

    renderPost();

    homeView.style.display = ''

}