// REGISTER VIEW

var registerView = document.getElementById('register-view')

registerView.style.display = 'none'

// NAVIGATION TO LOGIN

var loginLink = registerView.querySelector('#login-link')

loginLink.onclick = function (event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = ''
}

// SUBMIT FOR REGISTER

var registerForm = registerView.querySelector('#register-form')

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.querySelector('#name-register')
    var emailInput = registerForm.querySelector('#email-register')
    var passwordInput = registerForm.querySelector('#password-register')

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