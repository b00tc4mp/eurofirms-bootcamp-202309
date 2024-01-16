//login view
loginView = document.getElementById("login-view")

loginView.style.display = ""


//login  navigate a register
registerLink = loginView.querySelector("#register-link")
registerLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = "none"
    registerView.style.display = ""
}

//login onSubmit
loginForm = loginView.querySelector("#login-form")
loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector("#email-input-login")
    var passwordInput = loginForm.querySelector("#password-input-login")

    var email = emailInput.value
    var password = passwordInput.value


    // try es intenta y captura.LLama a la funcion y captura el error en el catch
    try {
        authenticateUser(email, password)
        loginForm.reset()

        //loggedInEmail = foundUser.email

        loginView.style.display = "none"
        //cd apagamos login y encedemos la home, para pintar los nombres de los usuarios tenemos que pedir a home la clase de  los usuarios, que esta en html, en home view.


        //render user name en la header de la home.quiero cambiar el texto que tenia antes (hello worl ), y poner otro.Esto hace que en lugar de aparece Hello word, aparezca el nombre del usuario que conectado a la app en ese momento

        var userNameSpan = homeView.querySelector("#user-name-span")

        var user = retrieverUser(email)
        userNameSpan.innerText = user.name


        //render posts is body en la home
        //cd apagamos login y encedemos la home, para pintar los posts tenemos que pedir a home el contenedor de  los post, que esta en html, en home view

        renderPosts()


        homeView.style.display = ""
    } catch (error) {
        alert(error.message)
    }

}