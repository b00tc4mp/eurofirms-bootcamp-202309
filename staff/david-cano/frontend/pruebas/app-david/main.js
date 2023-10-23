// Inicializamos la variable loggedInEmail como nula, vacía, al principio
var loggedInEmail = null;

function renderPost(postsList) {

    //Recorremos el array posts con un bucle for, pero a la inversa
    for (var i = posts.length - 1; i >= 0; i--) {
        //declaramos una variable para recoger cada iteración del for, de 
        var post = posts[i];

        // ahora creamos la etiqueta artículo para poner dentro los posts, el span (donde va el autor), la imagen y el texto del post 

        //creamos la variable para la etiqueta article
        var article = document.createElement('article');
        // le asignamos una clase llamada articles.
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
}