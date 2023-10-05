var loginNavigate = document.getElementById("login-view") // div login
var homeView =document.getElementById("home-view")
var registerNavigate =document.getElementById("register-view") // div register

var registerForm =document.getElementById("register-form")
registerForm.onsubmit = function(event){
    event.preventDefault()

    var name = event.target["name-input"].value
    var email = event.target["email-input"].value
    var passwork =event.target["passwork-input"].value

    console.log(name,email,passwork)
}

var loginForm = document.getElementById("login-form")
loginForm.onsubmit = function(event){
    event.preventDefault()

    var emailLogin = event.target["email-input-login"].value
    var passworkLogin = event.target["passwork-input-login"].value

    console.log(emailLogin,passworkLogin)

    loginView.classList.add("off")
    homeView.classList.remove("off")
}
// se tiene que poner # para que el queryselector busque id
var navigateToRegister = loginView.querySelector("#register-navigate") //queryselectorprimer elemento que tenga de id register-navigate
navigateToRegister.onclick =function(event){
   event.preventDefault()

   loginView.classlist.add("off")
   registerView.classlist.remove("off")
}

var navigateTolLogin = registerView.querySelector("#login-navigate")
navigateTolLogin.onclick = function(event){
    event.preventDefault()

    registerView.classlist.add("off")
    loginView.classlist.remote("off")
}
var handleLogin = loginView.querySelector("#login-button")
handleLogin.onclick = function(event){
    event.preventDefault()

    loginView.classlist.add("off")
    homeView.classList.remove("off")
}