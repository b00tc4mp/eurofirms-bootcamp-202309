// login view, aqui dejas encendido login

var loginView = document.getElementById('login-view')

loginView.style.display = ''

// navigation to register, pulsas register y navegas a login

var registerLink = loginView.querySelector('#register-link')

registerLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = ''
}

// submit login, al pulsar login subes formulacio al servidor

var loginForm = loginView.querySelector('#login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email-input')
    var passwordInput = loginForm.querySelector('#password-input')

    var email = emailInput.value
    var password = passwordInput.value

    console.log(email, password)
}