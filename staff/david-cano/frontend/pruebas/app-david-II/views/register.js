// REGISTER VIEW, div que contiene la página con el formulario de registro

var registerView = document.getElementById('register-view')

registerView.style.display = 'none'

// NAVIGATION TO LOGIN, enlace a la pagina de login 
var loginLink = registerView.querySelector('#login-link')

loginLink.onclick = function (event){
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = ''
}

// SUBMIT FOR REGISTER, entregar el registro, enviar el registro
var registerForm = registerView.querySelector('#register-form')

registerForm.onsubmit = function (event){
    event.preventDefault()

    var nameRegister = registerForm.querySelector('#name-register')
    var emailRegister = registerForm.querySelector('#email-register')
    var passwordRegister = registerForm.querySelector('#password-register')

    var name = nameRegister.value
    var email = emailRegister.value
    var password = passwordRegister.value

    try{
        registerUser(name, email, password)

        registerForm.reset()

        registerView.style.display = 'none'
        loginView.style.display = ''
    }catch (error){
        alert(error.message)
    }
}

    /*BUSCAR USUARIO POR EMAIL PARA COMPROBAR SI YA ESTÁ REGISTRADO
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

registerForm.reset();

    registerView.style.display = 'none'
    loginView.style.display = ''
}
*/