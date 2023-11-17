// HOME VIEW, div que contiene la página de home
// Almacena una referencia al elemento DOM con el identificador `home-view`. Este elemento contiene la página de inicio de la aplicación.
var homeView = document.getElementById('home-view')
// Oculta la página de inicio.
homeView.style.display = 'none'

//BOTON LOGOUT EN HEADER, en el encabezado
// Almacena una referencia al botón de cierre de sesión en la página de inicio.
var logoutButton = homeView.querySelector('#logout-button');
// Adjunta un manejador de eventos al botón de cierre de sesión.
// Cuando el usuario hace clic en el botón, se ejecuta la función especificada en el manejador de eventos.
logoutButton.onclick = function (){
    // Oculta la página de inicio.
    homeView.style.display = 'none'
// Obtiene la lista de posts de la página de inicio.
    var postsList = homeView.querySelector('#posts-list');
    // Vacía la lista de posts.
    postsList.innerHTML = ''
// Muestra la página de inicio de sesión.
    loginView.style.display = ''
}

//DIV CON EL FORMULARIO NUEVOS POSTS
// Almacena una referencia al elemento DOM que contiene el formulario para crear nuevos posts.
var postPanel = homeView.querySelector('#post-panel');
// Oculta el formulario para crear nuevos posts.
postPanel.style.display = 'none'

// FORMULARIO DE NUEVOS POSTS
// Almacena una referencia al formulario para crear nuevos posts.
var postForm = postPanel.querySelector('#post-form')

// BOTON CREATE NEW POST
// Almacena una referencia al botón para crear nuevos posts en la página de inicio.
var postButton = homeView.querySelector('#post-button')
// Adjunta un manejador de eventos al botón para crear nuevos posts.
// Cuando el usuario hace clic en el botón, se ejecuta la función especificada en el manejador de eventos.
postButton.onclick = function (){
    // Muestra el formulario para crear nuevos posts.
    postPanel.style.display = ''
}

//BOTON DE CANCELAR EL NUEVO POST
// Almacena una referencia al botón para cancelar la creación de un nuevo post.
var cancelPostButton = postForm.querySelector('#cancel-post-button')
// Adjunta un manejador de eventos al botón para crear nuevos posts.
// Cuando el usuario hace clic en el botón, se ejecuta la función especificada en el manejador de eventos.
cancelPostButton.onclick = function (event){
//Evita que se recargue la página por defecto
    event.preventDefault()
// Limpia el formulario.
    postForm.reset()
// Oculta el formulario para crear nuevos posts.
    postPanel.style.display = 'none'
}

// PARA SUBIR (enviar) EL FORMULARIO NUEVOS POSTS
// Adjunta un manejador de eventos al formulario para crear nuevos posts.
// Cuando el usuario envía el formulario, se ejecuta la función especificada en el manejador de eventos.
postForm.onsubmit = function (event){
    //Evita que se recargue la página por defecto
    event.preventDefault()

    var imageNewPost = postForm.querySelector('#image-new-post')
    var imageDescriptionNewPost = postForm.querySelector('#image-description-new-post')
    var textNewPost = postForm.querySelector('#text-new-post')
// Obtiene los valores de los campos del formulario.
    var newImage = imageNewPost.value
    var newImageDescription = imageDescriptionNewPost.value
    var newText = textNewPost.value
// Intenta crear un nuevo post en el servidor.
    try{
        createNewPost(loggedInEmail, newImage, newImageDescription, newText)
// Limpia el formulario.
        postForm.reset()
// Oculta el formulario para crear nuevos posts.
        postPanel.style.display = 'none'
// Actualiza la lista de posts en la página de inicio.
        renderPost()
        //captura los errores, si los hay, y lanza un mensaje de error
    }catch (error){
        alert(error.message)
    }
}

