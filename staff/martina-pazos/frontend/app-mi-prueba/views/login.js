// login view, aqui dejas encendido login

var loginView = document.getElementById('login-view')

loginView.style.display = ''

// navigation to register, pulsas register y navegas a login

var registerLink = loginView.querySelector('#register-link')

registerLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = ''
}

// submit login, al pulsar login subes formulacio al servidor

var loginForm = loginView.querySelector('#login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email-input')
    var passwordInput = loginForm.querySelector('#password-input')

    var email = emailInput.value
    var password = passwordInput.value

    // search user by email. buscamos por correo electronico, si coincide con los que tenemos en nuestra base de datos, si al recorrer for lo encuentra, con break ya se para la busqueda
    var foundUser = null
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    // if user not found then error, si no encontramos el correo, salta una alerta
    if (foundUser === null) {
        alert('Wrong credentials')

        return
    }

    // if user password is wrong then error, si no encontramos la contraseña, salta una alerta. Poner el signo ! delante de ==, hace que signifique lo contratio, (no igual)
    if (foundUser.password !== password) {
        alert('Wrong credentials')

        return
    }

    //para que se queden vacios los input del correo y contraseña
    emailInput.value = ''
    passwordInput.value = ''

    loggedInEmail = foundUser.email

    loginView.style.display = 'none'
    homeView.style.display = ''


    // render user name in header // mostrar el nombre de usuario en el encabezado
    var userNameSpan = homeView.querySelector('#user-name-span')
    userNameSpan.innerText = foundUser.name

    // render posts in body // mostrar los post del usuario en el body 
    var postsList = homeView.querySelector('#posts-list')
}