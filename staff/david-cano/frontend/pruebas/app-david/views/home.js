// Este archivo maneja la vista principal de la aplicación y las interacciones en ella

// HOME VIEW, div que contiene la página de home

// declaramos una variable "homeView", para el div que contiene el home, con el id home-view en el html
var homeView = document.getElementById('home-view');

// Inicialmente, ocultamos la vista de inicio
// le aplicamos un estilo display none para que no aparezca en pantalla
homeView.style.display = 'none';

//BOTON LOGOUT EN EL HEADER, en el encabezado
// declaramos una variable para el botón de loguearse, en la página del home, con un id logout-button en el html
var logoutButton = homeView.querySelector('#logout-button');

// Cuando se hace clic en "Logout," ocultamos la vista de inicio y limpiamos la lista de posts
//le aplicamos el método onclick (pk no es un formulario)
logoutButton.onclick = function () {
    //le decimos que desaparezca el home    
    homeView.style.display = 'none';

    //declaramos una variable y le asignamos el elemento del html que tenga el id posts-list (el div donde van los posts) y lo limpiamos de posts con el innerHTML
    var postsList = homeView.querySelector('#posts-list');
    postsList.innerHTML = '';

    // Restablecemos la variable de usuario logueado a null.
    //Le asignamos un valor null, vacío, a la variable loggedInEmail, que contiene el email del usuario si se ha logueado y así pasa vacía al login
    loggedInEmail = null;

    // Mostramos la vista de inicio de sesión
    loginView.style.display = '';
}

//DIV CON EL FORMULARIO NUEVOS POSTS

// declaramos una variable y le asignamos el elemento con id post-panel (div que contiene el formulario para crear nuevos post)
var postPanel = homeView.querySelector('#post-panel');
// le decimos que tiene que estar oculto
postPanel.style.display = 'none';

// FORMULARIO DE NUEVOS POSTS

// declaramos una variable y le asignamos el elemento con id post-form (el formulario de nuevos posts)
var postForm = postPanel.querySelector('#post-form');

// BOTON + DEL HEADER
// declaramos una variable y le asignamos el elemento con id post-button (el boton del header con el +)
var postButton = homeView.querySelector('#post-button')

//le aplicamos una función onclick
postButton.onclick = function () {

    // le decimos que aparezca el formulario de nuevos posts, que lo teniamos oculto arriba
    postPanel.style.display = '';
}

//BOTON DE CANCELAR EL NUEVO POST

// declaramos una variable y le asignamos el elemento con id cancel-post-button (el boton de cancelar en el formulario nuevos posts)
var cancelPostButton = postForm.querySelector('#cancel-post-button');

// le aplicamos el método onclick (es un botón) [¿y le ponemos el even.preventDefault porque está dentro de un formulario?]
cancelPostButton.onclick = function (event) {
    //event.preventDefault();

    // ahora limpiamos el formulario con reset
    postForm.reset();

    // le decimos que oculte el formulario de nuevos posts
    postPanel.style.display = 'none';
}

// PARA SUBIR (enviar) EL FORMULARIO NUEVOS POSTS

//le aplicamos el método onsubmit al formulario de nuevos posts
postForm.onsubmit = function (event) {
    event.preventDefault();

    // traemos los campos del formulario nuevos posts, el de imagen y el de texto declarando dos variables y asignandoles los elementos con id image-new-post y text-new-post
    var imageNewPost = postForm.querySelector('#image-new-post');
    var textNewPost = postForm.querySelector('#text-new-post');

    //ahora nos traemos los valores del campo image y text del formulario de nuevos posts y se lo asignamos a dos nuevas variables
    var newImage = imageNewPost.value;
    var newText = textNewPost.value;

    // ahora declaramos una variable que va ser un objeto donde vamos a guardar el email, del usuario logueado, la nueva imagen y el nuevo texto del nuevo post
    var newPost = {};

    //ahora le agregamos esas propiedades, email del login, la nueva imagen y el nuevo texto
    newPost.author = loggedInEmail;
    newPost.image = newImage;
    newPost.text = newText;

    //aquí le decimos que guarde las nuevas propiedades que agregamos antes, email, imagen y texto, en el array posts del archivo data.js
    posts.push(newPost);

    //ahora limpiamos el formulario de nuevos posts
    postForm.reset();

    // y le decimos que oculte el formulario de nuevos posts
    postPanel.style.display = 'none';


    renderPost();







    //ahora que tenemos los valores del formulario de nuevos posts y lo hemos guardado en el array posts del archivo data.js, tenemos que volver a ponerlos en el home con el nuevo post el primero. Recorremos el array posts con un bucle for, pero a la inversa
    /*
        for (var i = posts.length - 1; i >= 0; i--) {
            //declaramos una variable para recoger cada iteración del for
            var post = posts[i];
    
            // aqui creamos la etiqueta articulo para los posts, el span (donde va el autor), la imagen y el texto del post 
    
            //creamos la variable para la etiqueta article
            var article = document.createElement('article');
            article.setAttribute('class', 'articles');
    
            //creamos la variable para la etiqueta span y le decimos que inserte el texto de la propiedad autor
            var span = document.createElement('span');
            span.innerText = post.author;
    
            // creamos la variable para la etiqeta imagen, le añadimos una clase, le decimos que su src es el de la propiedad image en el array posts que recorre el for y le agregamos su alt
            var image = document.createElement('img');
            image.setAttribute('class', 'post-image');
            image.src = post.image;
            image.alt = post.text;
    
            // creamos la variable paragraph para la etiqueta p y que ponga el texto de la propiedad text en el array posts que recorre el for
            var paragraph = document.createElement('p');
            paragraph.innerText = post.text;
    
            // aqui a la etiqueta article le vamos agregar los hijos span, image y paragraph
            article.appendChild(span);
            article.appendChild(image);
            article.appendChild(paragraph);
    
            //aqui ponemos el artículo, con todo ya dentro, en el interior del div donde van los posts
            postsList.appendChild(article);
        }
        */
}

