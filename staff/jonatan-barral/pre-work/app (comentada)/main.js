var homeMain = document.getElementById('home-main')
var settingsMain = document.getElementById('settings-main')
var homeHeader = document.getElementById('home-header')
var loginMain = document.getElementById('login-main')
var registerMain = document.getElementById('register-main')
//Aquí, se obtienen referencias a los elementos HTML con los IDs "home-main" y "settings-main".//
var navigateToSettings = homeHeader.querySelector('#settings-navigate')
navigateToSettings.onclick = function (event) {
    event.preventDefault()

    homeMain.classList.add('off')
    settingsMain.classList.remove('off')
}
//Se configura un manejador de eventos de clic para el elemento con el ID "settings-navigate". Cuando se hace clic en este elemento, se oculta la sección de inicio y se muestra la sección de configuración.//
var navigateToHome = homeHeader.querySelector("#home-navigate")
navigateToHome.onclick = function (event) {
    event.preventDefault()

    settingsMain.classList.add("off")
    homeMain.classList.remove("off")
}

// boton para llevar a login
var handleLogout = homeHeader.querySelector("#logout-button")
handleLogout.onclick = function (event) {
    event.preventDefault()

    loggedUser = null

    homeHeader.classList.add('off')
    settingsMain.classList.add('off')
    homeMain.classList.add('off')
    loginMain.classList.remove('off')
}

var changePasswordForm = settingsMain.querySelector("#change-password-form")
changePasswordForm.onsubmit = function (event) {
    event.preventDefault()

    // almacenamos los valores de los inputs en variables
    var currentPassword = event.target["current-password"].value
    var newPassword = event.target["new-password"].value
    var newPasswordRepeat = event.target["new-password-repeat"].value

    if (newPassword === newPasswordRepeat) {
        var index
        for (var i = 0; i < users.length; i++) {
            var user = users[i]

            if (user.email === loggedUser.email) {
                index = i

                break
            }
        }

        if (users[index].password === currentPassword) {
            users[index].password = newPassword

            alert('password changed succesfully')

            settingsMain.classList.add("off")
            homeMain.classList.remove("off")
            changePasswordForm.reset()
        }
        else {
            alert('wrong current password')
        }
    }
    else {
        alert('the new passwords must be equals')
    }
}
// Obtener el formulario de cambio de dirección de correo electrónico //
var changeEmailForm = settingsMain.querySelector('#change-email-form')
// Configurar un manejador de eventos para el evento "submit" del formulario
changeEmailForm.onsubmit = function (event) {
    event.preventDefault()

        // Obtener el nuevo correo electrónico y la contraseña ingresados en el formulario//
    var newEmail = event.target['new-email'].value
    var password = event.target.password.value
    
    // Verificar si el nuevo correo electrónico es diferente al correo electrónico actual del// 
    if (newEmail !== loggedUser.email) {
        var index
                // Buscar al usuario actual en la lista de usuarios//
        for (var i = 0; i < users.length; i++) {
            var user = users[i]

            if (user.email === loggedUser.email) {
                index = i

                break
            }
        }
        // Verificar si la contraseña ingresada coincide con la contraseña del usuario//
        if (users[index].password === password) {
            users[index].email = newEmail
            // Mostrar una alerta de éxito//
            alert('email changed succesfully')
            // Ocultar la sección de configuración y mostrar la página principal//
            settingsMain.classList.add("off")
            homeMain.classList.remove("off")
                        // Restablecer el formulario de cambio de contraseña//
            changePasswordForm.reset()
        }
        else {
                        // Mostrar un mensaje de error si la contraseña es incorrecta//
            alert('wrong password')
        }
    }
    else {
                // Mostrar un mensaje de error si el nuevo correo electrónico es igual al correo actual//
        alert('new email must be different from current email')
    }
}

// recoge los datos, los pinta en consola y nos lleva a home
var loginForm = loginMain.querySelector('#login-form')
loginForm.onsubmit = function (event) {
    event.preventDefault()

    var email = event.target.email.value
    var password = event.target.password.value

    var userFounded
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (email === user.email) {
            userFounded = user

            break
        }
    }

    if (userFounded) {
        if (userFounded.password === password) {
            loggedUser = userFounded

            loginMain.classList.add('off')
            homeHeader.classList.remove('off')
            homeMain.classList.remove('off')

            loginForm.reset()
        }
        else {
            alert('Wrong credentials')
        }
    }
    else {
        alert('Wrong credentials')
    }
}

// enlace para poder navegar hacia registro
var navigateToRegister = loginMain.querySelector('#register-navigate')
navigateToRegister.onclick = function (event) {
    event.preventDefault()

    loginMain.classList.add('off')
    registerMain.classList.remove('off')
}

// enlace para poder navegar hacia login
var navigateToLogin = registerMain.querySelector('#login-navigate')
navigateToLogin.onclick = function (event) {
    event.preventDefault()

    registerMain.classList.add('off')
    loginMain.classList.remove('off')
}

// recoger el nombre del email y la contraseña poniendolos en la pantalla y nos lleva a login
var registerForm = registerMain.querySelector('#register-form')
registerForm.onsubmit = function (event) {
    event.preventDefault()

    var name = event.target.nombre.value
    var email = event.target.email.value
    var password = event.target.contrasena.value

    var userFounded
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (email === user.email) {
            userFounded = true

            break
        }
    }

    if (userFounded) {
        alert('Email already in use')
    }
    else {
        var user = {
            name,
            email,
            password
        }

        users.push(user)

        registerMain.classList.add('off')
        loginMain.classList.remove('off')

        registerForm.reset()
    }
}