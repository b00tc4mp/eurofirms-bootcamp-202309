// declaro las variables

var homeMain = document.getElementById("home-main")
var settingsMain = document.getElementById("settings-main")
var loginMain = document.getElementById("logout-button")


// lo que queremos hacer es que al pinchar HOME vaya a SETTINGS y viceversa
//se crea una variable (recordar que a las variables se les asigna el
//nombre que se quiera), se le indica que busque en el 
//document y se añade el elemento getElementById, abertura de parentesis 
//y dentro de los parentesis entre comillas se escribe el id asignado al ancor de 
//HOME", es decir, home-navigate"",
//le agrego el elemento onclick y 
//abro una function, llamo a la function () y pongo {}
//dentro de los parentesis se llama a la function "event"
//se hace el console.log para comprobar en el inspector que funciiona
//y algo muy importante, para que no este continuemente recargandose 


var navigateToSettings = document.getElementById("settings-main")
navigateToSettings.onclick = function (event) {
    event.preventDefault()

    settingsMain.classList.add("off")
    homeMain.classList.remove("off")
}
var navigateToHome = document.getElementById("home-main")
navigateToHome.onclick = function (event) {
    event.preventDefault()

    homeMain.classList.add("off")
    settingsMain.children.remve("off")

    // esto es un formulario, primero se declars la variable, y despues
    //se hacen los inputs uno a uno
    // los inpust se hacen de la siguiente forma:
    // se declara una nueva variable. event.target y entre corchetes y comillas
    // el nombre de id del primer input.value
    var changePassword = settingsMain.querySelector("#change-password-form")
    changePassword.onsubmit = function (event) {
        event.preventDefault()
        //esta ultima funcion esta mal ,no me sale

        var currentPassword = event.target.["current-password"].value
        var newPassword = event.target.["newpassword"].value
        var newPasswordRepead = event.target.["new-password-repead"].value
        console.log(currentPassword)

        if (newPassword === newPasswordRepead) {
            console.log(currentPassword)
            console.log(newPassword)
            console.log(newPasswordRepea)
            console.log(no podiamos verlo antes)

            alert("contraseña cambiada")

            changePasswordForm()reset

            settingsMain.classList.add("off")
            homeMain.classList.remove("off")
        } else {
            alert("las contraseñas no coinciden")
        }
    }








