// HOME VIEW, div que contiene la página de home

var homeView = document.getElementById('home-view');

homeView.style.display = 'none';

//BOTON LOGOUT EN HEADER, en el encabezado
var logoutButton = homeView.querySelector('#logout-button');

logoutButton.onclick = function () {   
    homeView.style.display = 'none';

    var postsList = homeView.querySelector('#posts-list');
    postsList.innerHTML = '';

   // loggedInEmail = null;

    loginView.style.display = '';
}

//DIV CON EL FORMULARIO NUEVOS POSTS
var postPanel = homeView.querySelector('#post-panel');

postPanel.style.display = 'none';

// FORMULARIO DE NUEVOS POSTS
var postForm = postPanel.querySelector('#post-form');

// BOTON CREATE NEW POST
var postButton = homeView.querySelector('#post-button')

postButton.onclick = function () {
    postPanel.style.display = '';
}

//BOTON DE CANCELAR EL NUEVO POST
var cancelPostButton = postForm.querySelector('#cancel-post-button');

cancelPostButton.onclick = function (event) {
    event.preventDefault();

    postForm.reset();

    postPanel.style.display = 'none';
}

// PARA SUBIR (enviar) EL FORMULARIO NUEVOS POSTS
postForm.onsubmit = function (event) {
    event.preventDefault();

    var imageNewPost = postForm.querySelector('#image-new-post');
    var imageDescriptionNewPost = postForm.querySelector('#image-description-new-post');
    var textNewPost = postForm.querySelector('#text-new-post');

    var newImage = imageNewPost.value;
    var newImageDescription = imageDescriptionNewPost.value;
    var newText = textNewPost.value;

    var newPost = {};

    newPost.author = loggedInEmail;
    newPost.image = newImage;
    newPost.imageDescription = newImageDescription;
    newPost.text = newText;

    posts.push(newPost);

    postForm.reset();

    postPanel.style.display = 'none';

    renderPost();

}

