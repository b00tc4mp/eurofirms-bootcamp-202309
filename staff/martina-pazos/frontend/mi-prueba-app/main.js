//data (lo que vamos a hacer es crear una array que guarde los usuarios que usen esta app, una base de datos de juguete)
var users = []
users[0] = { name: "Pepito Grillo", email: "pepito@grillo", password: "123123123" }
users[1] = { name: "Campa Nilla", email: "campa@nilla.com", password: "123123123" }
users[2] = { name: "Mafalda Niña", email: "mafalda@niña.com", password: "123123123" }

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
    var user = []
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

//login view
var loginView = document.getElementById("login-view")

loginView.style.display = ""


//login to navigate a register
var registerLink = loginView.querySelector("#register-link")
registerLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = "none"
    registerView.style.display = ""
}

//login onSubmit
var loginForm = loginView.querySelector("#login-form")
loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector("#email-input-login")
    var passwordInput = loginForm.querySelector("#password-input-login")

    var email = emailInput.value
    var password = passwordInput.value

    // cdo se registra, pasa a login, tiene que comprobarse que todos los datos son correctos (email, password), de no ser así saltar un mensaje de error. Para buscar en la array que guarda los usuarios registrados se hace un for.

    //creo esta variable, pq aun no encontre al usuario, por lo tanto es null
    var foundUser = null

    for (var i = 0; i < users.length; i++) {
        //cd encuentro el usuario de foundUser paso a users (ya no es null)
        var user = users[i]

        if (user.email === email) {
            foundUser = user
            //break se usa para para el for, si ya encontro el email que pare de buscar
            break
        }
    }

    //sino encuentro el usuario, return salgo de esta busqueda, y voy a la siguiente 
    if (foundUser === null) {
        alert("Wrong credentials")

        return
    }

    if (foundUser.password !== password) {
        alert("Wrong credentials")

        return
    }

    emailInput.value = ""
    passwordInput.value = ""


    loginView.style.display = "none"
    homeView.style.display = ""
}

//home view
var homeView = document.getElementById("home-view")

homeView.style.display = "none"

var logoutButton = homeView.querySelector("#logout-button")

logoutButton.onclick = function () {
    homeView.style.display = "none"
    loginView.style.display = ""
}




