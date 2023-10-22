// vamos a hacer que navegue de login a register y viceversa
var registerView = document.getElementById("register-view")
registerView.style.display = ""

var loginLink = registerView.querySelector("#login-link")
loginLink.onclick = function (event) {
    event.preventDefault()

    registerView.style.display = "none"
    loginView.style.display = ""
}
//vamos a hacer aqui una division
var loginView = document.getElementById("login-view")
loginView.style.display = " "

var registerLink = loginView.querySelector("#register-link")
registerLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = "none"
    registerView.style.display = " "
}

// onsubmit en register, se pincha el boton register y sube el formulario, la variable declarada registerForm, tiene que buscar en registerview una id register form para utilizar el método onsubmit y subir los input (name, passwork, email)

var registerForm = registerView.querySelector("#register-form")
registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.querySelector("name-input")
    var emailInput = registerForm.querySelector("email-input")
    var passwordInput = registerForm.querySelector("password-input")

    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value

    console.log(name, email, password)

}

