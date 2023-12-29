var registerForm = document.getElementById("register-form")
registerForm.onsubmit = function (event) {
    event.preventDefault()
    //event.target (en donde (target)hay que buscar el evento)
    var name = event.target["name-input"].value
    var email = event.target["email-input"].value
    var password = event.target["password-input"].value

    console.log(name, email, password)
}

var loginForm = document.getElementById("login-form")
loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailLogin = event.target["email-input-login"].value
    var passwordLogin = event.target["email-input-login"].value

    console.log(emailLogin, passwordLogin)
}



