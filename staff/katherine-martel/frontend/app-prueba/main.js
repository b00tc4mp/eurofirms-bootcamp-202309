var registerView = document.getElementById("register-view")
var loginview = document.getElementById("login-view")
var homeView = document.getElementById("home-view")

registerView.style.display ="none"
loginview.style.display = ""
homeView.style.display ="none"

var loginLink = registerView.querySelector("#login-link")
loginLink.onclick = function(event){
    event.prevenDefault()
}

registerView.style.display ="none"
loginview.style.display = ""

var registerLink = loginview.querySelector("#register-link")
registerLink.onclick = function(event){
    event.prevenDefault()

registerView.style.display =""
loginview.style.display = "none"
}

var registerForm = registerView.querySelector("#register-form")
registerForm.onsumint = function(event){
    event.prevenDefault()

    var nameInput = registerForm.querySelector("#name-input")
    var emailinput = registerForm.querySelector("#email-input")
    var passworkInput = registerForm.querySelector("#paswork-input")

    var name = nameInput.Value
    var email = emailinput.value
    var passwork = passworkInput.value

    console.log(name,email,passwork)

    registerView.style.display = "none"
    loginview.style.display = ""
}

var loginForm = loginview.querySelector("#login-form")
loginForm.onsumint = function(event){
    event.prevenDefault()

    var emailInput = loginForm.querySelector("#email-input")
    var passworkInput = loginForm.querySelector("#passwork-input")
     
    var email = emailInput.value
    var passwork = passworkInput.value

    console.log(email,passwork)

    homeView.style.display = ""
    loginview.style.display = "none"
}