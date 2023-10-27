// Declaramos una variable en null para luego asignarle el email del usuario conectado
var loggedInEmail = null

function renderPost(){
     // Intenta recuperar los posts del usuario conectado.
    try{
        var posts = retrievePosts(loggedInEmail)
// Obtiene el elemento DOM que contiene la lista de posts.
    var postsList = homeView.querySelector('#posts-list')
    // Vacía la lista de posts.
    postsList.innerHTML = ''
// Itera sobre los posts y los renderiza en la lista de posts.
    for(var i = posts.length - 1; i >= 0; i--){ 
        var post = posts[i]
// Crea un elemento DOM para cada post
        var article = document.createElement('article');
        article.setAttribute('class', 'articles')
        article.setAttribute('aria-label', 'Post')
// Crea un elemento DOM para el título del post.
        var h3 = document.createElement('h3')
            h3.innerText = post.author
            h3.setAttribute('aria-label', 'author')
// Crea un elemento DOM para la imagen del post.
        var image = document.createElement('img')
        image.setAttribute('class', 'post-image')
        image.src = post.image
        image.alt = post.imageDescription
// Crea un elemento DOM para el texto del post.
        var paragraph = document.createElement('p')
        paragraph.innerText = post.text
// Añade los elementos DOM del post al elemento DOM del artículo.
        article.appendChild(h3)
        article.appendChild(image)
        article.appendChild(paragraph)
 // Añade el elemento DOM del artículo a la lista de posts.
        postsList.appendChild(article)
    }
    //Captura los errores, si los hay, y lanza un error
    }catch (error){
        alert(error.message)
    }
}