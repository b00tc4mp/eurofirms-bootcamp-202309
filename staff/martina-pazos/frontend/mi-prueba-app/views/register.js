// En una app cdo se entra el register esta oculto, lo que se ve es el login. Apagamos la vistar de register.

//register view
registerView = document.getElementById("register-view")
registerView.style.display = "none"

//register to navigate a login
loginLink = registerView.querySelector("#login-link")
loginLink.onclick = function (event) {
    event.preventDefault()

    registerView.style.display = "none"
    loginView.style.display = ""
}

//register onsubmit
registerForm = registerView.querySelector("#register-form")

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.querySelector("#name-input")
    var emailInput = registerForm.querySelector("#email-input")
    var passwordInput = registerForm.querySelector("#password-input")

    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value
    try {
        registerUser(name, email, password)
        //para que se borre el campo del input una vez registrados
        registerForm.reset()
        // una vez introducido los datos, se apague register y se encienda login
        registerView.style.display = "none"
        loginView.style.display = ""
    } catch (error) {
        alert(error.message)
    }
}