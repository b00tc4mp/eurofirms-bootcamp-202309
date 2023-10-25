// home view

// Obtener el elemento HTML con el id 'home-view'
var homeView = document.getElementById('home-view');

// Ocultar la vista de inicio
homeView.style.display = 'none';

// Obtener el botón de cierre de sesión dentro de la vista de inicio
var logoutButton = homeView.querySelector('#logout-button');

// Agregar un controlador de eventos al hacer clic en el botón de cierre de sesión
logoutButton.onclick = function () {
    // Ocultar la vista de inicio y mostrar la vista de inicio de sesión
    homeView.style.display = 'none';

    var postsList = homeView.querySelector("#post-list")
    postsList.innerHTML = ""

    loggedInEmail = null

    loginView.style.display = '';
};
//crear un boton cuando funcione el formulario para abrir el post
var postButton = homeView.querySelector("#post-button");
postButton.onclick = function () {
    // console.log (postButton);se quita
    postPanel.style.display = ""
}
//se crea el post panel, none para que se oculte el formulario
var postPanel = homeView.querySelector("#post-panel");
postPanel.style.display = 'none';
//se crea el post formulario "dentro del post panel"
var postForm = postPanel.querySelector("#post-form");

//vamos a ser cancel button
var cancelPostButton = postForm.querySelector("#cancel-post-button")

cancelPostButton.onclick = function () {
    postForm.reset()
    postPanel.style.display = "none"
}
//traer el boton 
postForm.onsubmit = function (event) {
    event.preventDefault()
    //
    var imageInput = postForm.querySelector("#image-input")
    var textInput = postForm.querySelector("#text-input")

    var image = imageInput.value
    var text = textInput.value
    var post = {}
    //controlar al usuario 
    post.author = loggedInEmail
    post.image = image
    post.text = text

    posts.push(post)
    postForm.reset()
    postPanel.style.display = "none"

    var postsList = homeView.querySelector("#post-list")
    //que no se repita las imagenes quede vacio 
    postsList.innerHTML = ""
    //recorrer los posts
    for (var i = posts.length - 1; i >= 0; i--) {
        var post = posts[i]

        var article = document.createElement("article")
        article.setAttribute('class', 'post-article');

        var span = document.createElement("span")
        span.innerText = post.author

        var image = document.createElement("img")
        image.setAttribute("class", "post-image")
        image.src = post.image
        image.alt = post.text

        var paragraph = document.createElement("p")
        paragraph.innerText = post.text

        article.appendChild(span)
        article.appendChild(image)
        article.appendChild(paragraph)

        postsList.appendChild(article)
    }

}