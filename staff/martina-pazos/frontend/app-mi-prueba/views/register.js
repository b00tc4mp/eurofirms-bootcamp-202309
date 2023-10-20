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

    // search user by email. declaramos la variable foundUser que por ahora es igual a nulo, recorremos el for buscando un usuario que tenga el mismo correo electrónico que introduce en la app, cdo lo encuentre el for (foundUser), le indicamos que para la busqueda con el break)
    var foundUser = null
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        if (user.email === email) {
            foundUser = user

            break
        }
    }

    // if user exists (it was found) then error, si el usuario no se encuentra, salir ventana emergente con una alerta  y retornar la infomración
    if (foundUser
        !== null) {
        alert('User already exists')
        return
    }
    //Ahora vamos a register.js, vamos a añadir la var users [], esto se hace para que el usuario pueda registrarse en register con su nome, email.password, subir la información al servidor y apagar register y encender login

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