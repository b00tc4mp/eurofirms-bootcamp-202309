// REGISTER VIEW, div que contiene la página con el formulario de registro

var registerView = document.getElementById('register-view')

registerView.style.display = 'none'

// NAVIGATION TO LOGIN, enlace a la pagina de login <a>
var loginLink = registerView.querySelector('#login-link')

loginLink.onclick = function (event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = ''
}

// SUBMIT FOR REGISTER, entregar el registro, enviar el registro
var registerForm = registerView.querySelector('#register-form')

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.querySelector('#name-register')
    var emailInput = registerForm.querySelector('#email-register')
    var passwordInput = registerForm.querySelector('#password-register')

    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value

    //BUSCAR USUARIO POR EMAIL PARA COMPROBAR SI YA ESTÁ REGISTRADO
var foundUser = null

for (var i = 0; i < users.length; i++) {
    var user = users[i]

    if (user.email === email) {
        foundUser = user
        break
    }
}

//SI EL USUARIO EXISTE, SI FUE ENCONTRADO, ALERTA DE ERROR
  if (foundUser !== null) {
    alert('User already exists')
    return
}

//PARA GUARDAR LOS NUEVOS DATOS DEL USUARIO REGISTRADO
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