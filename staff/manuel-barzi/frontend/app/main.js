// register view

var registerView = document.getElementById('register-view')

registerView.style.display = 'none'

// navigation to login

var loginLink = registerView.querySelector('#login-link')

loginLink.onclick = function (event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = ''
}

// submit for register

var registerForm = registerView.querySelector('#register-form')

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.querySelector('#name-input')
    var emailInput = registerForm.querySelector('#email-input')
    var passwordInput = registerForm.querySelector('#password-input')

    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value

    console.log(name, email, password)
}

// login view

var loginView = document.getElementById('login-view')

loginView.style.display = ''

// navigation to register

var registerLink = loginView.querySelector('#register-link')

registerLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = ''
}

// submit login

var loginForm = loginView.querySelector('#login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email-input')
    var passwordInput = loginForm.querySelector('#password-input')

    var email = emailInput.value
    var password = passwordInput.value

    console.log(email, password)
}

// home view

var homeView = document.getElementById('home-view')

homeView.style.display = 'none'