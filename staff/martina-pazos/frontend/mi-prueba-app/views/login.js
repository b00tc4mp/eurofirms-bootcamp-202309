//login view
var loginView = document.getElementById("login-view")

loginView.style.display = ""


//login  navigate a register
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

    loggedInEmail = foundUser.email


    loginView.style.display = "none"
    //cd apagamos login y encedemos la home, para pintar los nombres de los usuarios tenemos que pedir a home la clase de  los usuarios, que esta en html, en home view.


    //render user name en la header de la home.quiero cambiar el texto que tenia antes (hello worl ), y poner otro.Esto hace que en lugar de aparece Hello word, aparezca el nombre del usuario que conectado a la app en ese momento
    var userNameSpan = homeView.querySelector("#user-name-span")
    userNameSpan.innerText = foundUser.name


    //render posts is body en la home
    //cd apagamos login y encedemos la home, para pintar los posts tenemos que pedir a home el contenedor de  los post, que esta en html, en home view
    var postsList = homeView.querySelector("#posts-list")
    for (var i = 0; i < posts.length; i++) {
        var post = posts[i]

        //el createElement te permite crear de la nada un documento html
        var article = document.createElement("article")
        // que aparezca en email del usuario que publica el post
        var span = document.createElement("span")
        span.innerText = post.author
        //el src y la imagen son propiedades del post como dice data
        var image = document.createElement("img")
        image.src = post.image
        image.setAttribute("class", "post-image")

        var paragraph = document.createElement("p")
        //innerText,el text es una propiedad de p, como dice data, es el texto interior en el párrafo
        paragraph.innerText = post.text
        //appendChild es poner dentro, en este caso dentro del article
        article.appendChild(span)
        article.appendChild(image)
        article.appendChild(paragraph)

        postsList.appendChild(article)

        console.log(post)
    }


    homeView.style.display = ""
}