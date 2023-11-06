// data (aqui se almacenan unos datos que nos hemos inventado, como si se hubiesen regustrado)

var users = []

users[0] = { name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123' }

users[1] = { name: 'Campa Nilla', email: 'campa@nilla.com', password: '123123123' }

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

    var user = {}
    user.name = name
    user.email = email
    user.password = password

    users.push(user)

    nameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''

    registerView.style.display = 'none'
    loginView.style.display = ''
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
    homeView.style.display = ''
}

// home view

var homeView = document.getElementById('home-view')

homeView.style.display = 'none'

var logoutButton = homeView.querySelector('#logout-button')

logoutButton.onclick = function () {
    homeView.style.display = 'none'
    loginView.style.display = ''
}