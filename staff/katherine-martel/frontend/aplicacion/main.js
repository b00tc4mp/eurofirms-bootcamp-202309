//creo una variable "loginNavigate" para buscar en el documento 
//log-view que es una id
var loginNavigate = document.getElementById("login-view") // div login
var homeView = document.getElementById("home-view")
var registerNavigate = document.getElementById("register-view") // div register
//declaro una variable nueva "registerForm"para buscar por 
//id en el documento "register-form"
var registerForm = document.getElementById("register-form")
//registerForm "onsubmit"
registerForm.onsubmit = function (event) {
    //para no recargar la pagina continuamente
    event.preventDefault()
    //para tener los valores
    var name = event.target["#name-input"].value
    var email = event.target["#email-input"].value
    var passwork = event.target["#passwork-input"].value

    console.log(name, email, passwork)
}

var loginForm = document.getElementById("login-form")
loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailLogin = event.target["email-input-login"].value
    var passworkLogin = event.target["passwork-input-login"].value

    console.log(emailLogin, passworkLogin)

    loginView.classList.add("off")
    homeView.classList.remove("off")
}
// se tiene que poner # para que el queryselector busque id
//queryselectorprimer elemento que tenga de id register-navigate
var navigateToRegister = loginView.querySelector("#register-navigate")
navigateToRegister.onclick = function (event) {
    event.preventDefault()

    loginView.classlist.add("off")
    registerView.classlist.remove("off")
}

var navigateTolLogin = registerView.querySelector("#login-navigate")
navigateTolLogin.onclick = function (event) {
    event.preventDefault()

    registerView.classlist.add("off")
    loginView.classlist.remote("off")
}
var handleLogin = loginView.querySelector("#login-button")
handleLogin.onclick = function (event) {
    event.preventDefault()

    loginView.classlist.add("off")
    homeView.classList.remove("off")
}