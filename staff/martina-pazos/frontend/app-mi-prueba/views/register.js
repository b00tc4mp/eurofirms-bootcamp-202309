// register view, aqui se apaga la parte de register

var registerView = document.getElementById('register-view')

registerView.style.display = 'none'

// navigation to login, pulsas login y navegas a register

var loginLink = registerView.querySelector('#login-link')

loginLink.onclick = function (event) {
    event.preventDefault()
    //apagas registes y enciendes login
    registerView.style.display = 'none'
    loginView.style.display = ''
}

// submit for register, pulsas boton register y subes formulario 

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