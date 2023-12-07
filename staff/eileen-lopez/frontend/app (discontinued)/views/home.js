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
    loginView.style.display = '';
};

var newPostPanel = homeView.querySelector('#new-post-panel');
newPostPanel.style.display = 'none'

var newPostButton = homeView.querySelector('#new-post-button');
newPostButton.onclick = function () {
    newPostPanel.style.display = ''
}

var newPostForm = newPostPanel.querySelector('#new-post-form')

var CancelNewPostButton = newPostForm.querySelector('#cancel-new-post-button')
CancelNewPostButton.onclick = function () {
    newPostForm.reset()

    newPostPanel.style.display = 'none'
}

newPostForm.onsubmit = function (event) {
    event.preventDefault()

    var newImagePost = newPostForm.querySelector('#image-input');
    var newTextPost = newPostForm.querySelector('#text-input');

    var imageValue = newImagePost.value;
    var textValue = newTextPost.value;

    var newPost = {}
    newPost.image = imageValue
    newPost.text = textValue
    newPost.author = loggedUser

    posts.push(newPost)
    newPostForm.reset()

    renderPosts()

    newPostPanel.style.display = 'none'
}

function renderPosts() {
    var postList = homeView.querySelector('#post-list');

    postList.innerHTML = ''

    for (var i = posts.length - 1; i >= 0; i--) {
        var post = posts[i]
        var article = document.createElement('article');
        article.setAttribute('class', 'post-article');

        var span = document.createElement('span');

        span.innerText = post.author;

        var image = document.createElement('img'); // <img>
        image.setAttribute('class', 'post-image'); // <img class='post-image>
        image.src = post.image;  // <img class='post-image' src='...url'>
        image.alt = post.alt  // <img class='post-image' src='...url' alt='text>

        var paragraph = document.createElement('p');
        paragraph.innerText = post.text; // <p>innerText<p/>

        article.appendChild(span);
        article.appendChild(image);
        article.appendChild(paragraph);

        postList.appendChild(article);
    }
}