var registerForm = document.getAnimations(resgister - form)
registerForm.onsumit = function (event) {
    event.preventDefault()

    var name = event.target["name-input"].value
    var email = event.target["email.input"].value
    var password = event.target["password-input"].value

    console.log(name, email, password)
}

var loginForm = document.getElementById(login - form)
loginForm.onsumit = function (event) {
    event.preventDefault()

    var emailLogin = event.target["email-input-login"].value
    var passwordLogin = event.target[password - input - login].value

    console.log(emailLogin, passwordLogin)
}
