//home view
homeView = document.getElementById("home-view")

homeView.style.display = "none"

logoutButton = homeView.querySelector("#logout-button")
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
newPostPanel = homeView.querySelector("#new-post-panel")
newPostPanel.style.display = "none"

newPostForm = newPostPanel.querySelector("#new-post-form")

//cdo se haga click q aparezca el formulario
newPostButton = homeView.querySelector("#new-post-button")
newPostButton.onclick = function () {
    newPostPanel.style.display = ""
}

//que se cierre el formulario cd se de a este boton +
cancelnewPostButton = newPostForm.querySelector("#cancel-new-post-button")
cancelnewPostButton.onclick = function (event) {
    event.preventDefault()
    //para que se limpien los campos
    newPostForm.reset()
    //para que desaparezca
    newPostPanel.style.display = "none"
}
//sumit post form (subir el formulario de los post)
newPostForm.onsubmit = function (event) {
    event.preventDefault()

    var imageInput = newPostForm.querySelector("#image-input")
    var imageDescriptionInput = newPostForm.querySelector("#image-description-input")
    var textInput = newPostForm.querySelector("#text-input")

    var image = imageInput.value
    var imageDescription = imageDescriptionInput.value
    var text = textInput.value
    //nos falta el imail que quien publica el post, nos vamos a main.js(loggedInEmail)

    // estoy añadiendo propiedades a los objetos, estos mutando los objetos
    var post = {}
    post.author = loggedInEmail
    post.image = image
    post.imageDescription = imageDescription
    post.text = text
    // el push, se usa para insertar en la base de datos , en este caso los posts
    posts.push(post)
    //que se resete el formulario
    newPostForm.reset()
    //apagar el paner cdo se publique el post
    newPostPanel.style.display = "none"
    //para que no se repitan los post
    renderPosts()
}
// Vamos a crear una function para que pinte (render en ingles es) los nuevos posts 
function renderPosts() {
    var postsList = homeView.querySelector("#posts-list")

    postsList.innerHTML = ""

    for (var i = posts.length - 1; i >= 0; i--) {
        var post = posts[i]

        //el createElement te permite crear de la nada un documento html
        var article = document.createElement("article")
        article.setAttribute("class", "post")
        // que aparezca en email del usuario que publica el post
        var span = document.createElement("span")
        span.innerText = post.author
        span.setAttribute("aria-label", "author")
        //el src y la imagen son propiedades del post como dice data
        var image = document.createElement("img")
        image.src = post.image
        image.setAttribute("class", "post-image")
        image.alt = post.imageDescription

        var paragraph = document.createElement("p")
        //innerText,el text es una propiedad de p, como dice data, es el texto interior en el párrafo
        paragraph.innerText = post.text
        //appendChild es poner dentro, en este caso dentro del article
        article.appendChild(span)
        article.appendChild(image)
        article.appendChild(paragraph)

        postsList.appendChild(article)

    }

}

