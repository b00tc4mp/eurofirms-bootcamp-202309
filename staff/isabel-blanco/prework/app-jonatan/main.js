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



    // comparamos que las dos contraseñas nuevas coincidan
    if (newPassword === newPasswordRepeat) {
        console.log(currentPassword)
        console.log(newPassword)
        console.log(newPasswordRepeat)
        console.log("team bootcamp ole ole ole")

        alert('contraseña cambiada')

        //reseteamos el formulario 
        changePasswordForm.reset()

        settingsMain.classList.add("off")
        homeMain.classList.remove("off")
    }
    // si no coinciden doy un alerta
    else {
        alert('las contraseñàs no coinciden')
    }
}

var loginForm = loginMain.querySelector('#login-form')
loginForm.onsubmit = function (event) {
    event.preventDefault()

    var email = event.target.email.value
    var password = event.target.password.value

    console.log(email, password)

    loginMain.classList.add('off')
    homeHeader.classList.remove('off')
    homeMain.classList.remove('off')

    loginForm.reset()
}

var navigateToRegister = loginMain.querySelector('#register-navigate')
navigateToRegister.onclick = function(event){
    event.preventDefault()

    loginMain.classList.add('off')
    registerMain.classList.remove('off')
}

var navigateToLogin = registerMain.querySelector('#login-navigate')
navigateToLogin.onclick = function(event){
    event.preventDefault()

    registerMain.classList.add('off')
    loginMain.classList.remove('off')
}

var registerForm = registerMain.querySelector('#register-form')
registerForm.onsubmit = function (event) {
    event.preventDefault()

    var name = event.target.nombre.value
    var email = event.target.email.value
    var password = event.target.contrasena.value

    console.log(name, email, password)

    registerMain.classList.add('off')
    loginMain.classList.remove('off')

    registerForm.reset()
}