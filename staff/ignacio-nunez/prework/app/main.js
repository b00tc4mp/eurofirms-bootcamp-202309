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

var changeEmailForm = settingsMain.querySelector('#change-email-form')
changeEmailForm.onsubmit = function (event) {
    event.preventDefault()

    var newEmail = event.target['new-email'].value
    var password = event.target.password.value

    if (newEmail !== loggedUser.email) {
        var index
        for (var i = 0; i < users.length; i++) {
            var user = users[i]

            if (user.email === loggedUser.email) {
                index = i

                break
            }
        }

        if (users[index].password === password) {
            users[index].email = newEmail

            alert('email changed succesfully')

            settingsMain.classList.add("off")
            homeMain.classList.remove("off")
            changePasswordForm.reset()
        }
        else {
            alert('wrong password')
        }
    }
    else {
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