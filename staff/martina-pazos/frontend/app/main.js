var loginNavigate = document.getElementById("login-navigate")
var registerNavigate = document.getElementById("register-navigat")


var registerForm = document.getElementById('register-form')
registerForm.onsubmit = function (event) {
    event.preventDefault()

    var name = event.target['name-input'].value
    var email = event.target['email-input'].value
    var passWord = event.target['password-input'].value

    console.log(name, email, passWord)
}

var loginForm = document.getElementById("login-form")
loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailLogin = event.target["email-input-login"].value
    var passwordLogin = event.target["password-input-login"]

    console.log(emailLogin, passwordLogin)
}

var navigateToRegister = registerNavigate.querySelector("register-navigate")
navigateToRegister.onclick = function (event) {
    //esta function esta mal hecha, no se ven mas grabaciones, mirar codigos
}

