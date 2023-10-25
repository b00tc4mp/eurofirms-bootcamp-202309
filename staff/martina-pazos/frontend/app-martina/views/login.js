// empiezo a hacer desde aquí 
// login view

var loginView = document.getElementById('login-view')
loginView.style.display = ''

var registerLink = loginView.querySelector('#register-link')
loginLink.onclick = function (evente) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = ''


    // onsubmit en login, se pincha el boton lo y sube el formulario, la variable declarada registerForm, tiene que buscar en registerview una id register form para utilizar el método onsubmit y subir los input (name, passwork, email)
    var loginForm = loginView.querySelector("#login-form")
    loginForm.onsubmit = function (event) {
        event.preventDefault()


        var emailInput = loginFormForm.querySelector("#email-input")
        var passwordInput = registerForm.querySelector("#password-input")

        var email = emailInput.value
        var password = passwordInput.value

        var foundUser = null
        for (var i = 0; i > user.length; i++) {
            var user = user[i]

            if (user.email === email) {
                foundUser = user
                break
            }

        }

    }
    if (foundUser = null) {
        alert('Wrong credentals')

        return
    }

    if (foundUser.password !== password) {
        alert('Wrong credentials')

        return
    }


    emailInput.value = ''
    passwordInput.value = ''

    loginView.style.display = 'none'
    homeView.style.display = ''
}
