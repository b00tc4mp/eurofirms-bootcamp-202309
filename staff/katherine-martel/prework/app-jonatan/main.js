var homeMain = document.getElementById('home-main')
var settingsMain = document.getElementById('settings-main')
//Aquí, se obtienen referencias a los elementos HTML con los IDs "home-main" y "settings-main".//
var navigateToSettings = document.getElementById('settings-navigate')
navigateToSettings.onclick = function (event) {
    event.preventDefault()

    homeMain.classList.add('off')
    settingsMain.classList.remove('off')
}
//Se configura un manejador de eventos de clic para el elemento con el ID "settings-navigate". Cuando se hace clic en este elemento, se oculta la sección de inicio y se muestra la sección de configuración.//
var navigateToHome = document.getElementById("home-navigate")
navigateToHome.onclick = function (event) {
    event.preventDefault()

    settingsMain.classList.add("off")
    homeMain.classList.remove("off")
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


