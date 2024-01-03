// En una app cdo se entra el register esta oculto, lo que se ve es el login. Apagamos la vistar de register.

//register view
var registerView = document.getElementById("register-view")
registerView.style.display = "none"

//register to navigate a login
var loginLink = registerView.querySelector("#login-link")
loginLink.onclick = function (event) {
    event.preventDefault()

    registerView.style.display = "none"
    loginView.style.display = ""
}

//register onsubmit
var registerForm = registerView.querySelector("#register-form")

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.querySelector("#name-input")
    var emailInput = registerForm.querySelector("#email-input")
    var passwordInput = registerForm.querySelector("#password-input")

    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value


    //se crea una array con un objeto vacio, 
    var user = {}
    //a cada objeto se le asigna una propiedad, que recoge los datos del formulacio (name, email, password)
    user.name = name
    user.email = email
    user.password = password
    //con esto el ultimo usuario que se registre se incorpora en la array
    users.push(user)

    //para que se borre el campo del input una vez registrados
    nameInput.value = ""
    emailInput.value = ""
    password.value = ""
    // una vez introducido los datos, se apague register y se encienda login
    registerView.style.display = "none"
    loginView.style.display = ""
}