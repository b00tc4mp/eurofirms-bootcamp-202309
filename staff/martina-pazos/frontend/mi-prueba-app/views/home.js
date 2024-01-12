//home view
var homeView = document.getElementById("home-view")

homeView.style.display = "none"

var logoutButton = homeView.querySelector("#logout-button")
//se pone onclick cdo no hay formulario, y onsubmit cdo hay formulario
logoutButton.onclick = function () {
    homeView.style.display = "none"

    // el postList sale de login, se pone aqui para no cargar los mismos post cada vez q entre un usuario
    var postsList = homeView.querySelector("#posts-list")
    // y para limpiarlos se hace asi, limpiar los elementos fijos de html
    postsList.innerHTML = ""

    loginView.style.display = ""
}
// vamos a mecanizar el button +, el del form del post
//post form, este es es formulario para crear un post, se hace esto para que cdo se abra la app el formulario aparezca oculto
var postPanel = homeView.querySelector("#post-panel")
postPanel.style.display = "none"

var postForm = postPanel.querySelector("#post-form")

//cdo se haga click q aparezca el formulario
var postButton = homeView.querySelector("#post-button")
postButton.onclick = function () {
    postPanel.style.display = ""
}

//que se cierre el formulario cd se de a este boton +
var cancelPostButton = postForm.querySelector("#cancel-post-button")
cancelPostButton.onclick = function (event) {
    event.preventDefault()
    //para que se limpien los campos
    postForm.reset()
    //para que desaparezca
    postPanel.style.display = "none"
}
//sumit post form (subir el formulario de los post)
postForm.onsubmit = function (event) {
    event.preventDefault()

    var imageInput = postForm.querySelector("#image-input")
    var textInput = postForm.querySelector("#text-input")

    var image = imageInput.value
    var text = textInput.value
    //nos falta el imail que quien publica el post, nos vamos a main.js(loggedInEmail)

    // estoy añadiendo propiedades a los objetos, estos mutando los objetos
    var post = {}
    post.author = loggedInEmail
    post.image = image
    post.text = text
    // el push, se usa para insertar en la base de datos , en este caso los posts
    posts.push(post)
    //que se resete el formulario
    postForm.reset()
    //apagar el paner cdo se publique el post
    postPanel.style.display = "none"
    //para que no se repitan los post


    //ahora tenemos que hacer que se refreque el listado de posts q ya esta publicado, hay q tener en cuenta  estamos publicando uno nuevo (lo estamos copiando de login)
    //render posts

    var postsList = homeView.querySelector("#posts-list")
    //tengo q limpiar los posts anterios, pq sino me los va a acumular con los nuevos posts
    postsList.innerHTML = ""
    for (var i = posts.length - 1; i >= 0; i--) {
        var post = posts[i]
        var article = document.createElement("article")
        article.setAttribute("class", "post")
        var span = document.createElement("span")
        span.innerText = post.author

        var image = document.createElement("img")
        image.setAttribute("class", "post-image")
        image.src = post.image

        var paragraph = document.createElement("p")
        paragraph.innerText = post.text
        article.appendChild(span)
        article.appendChild(image)
        article.appendChild(paragraph)

        postsList.appendChild(article)

    }
}

