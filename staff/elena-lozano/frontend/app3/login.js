// LOGIN VIEW, div que contiene el formulario de login


var loginView = document.getElementById('login-view')

// Esto hace que aparezca la pantalla del login
loginView.style.display = ''


//Register link
var registerLink = loginView.querySelector('#register-link')

//crea un evento cuando hacemos click
registerLink.onclick = function (event) {

    // le decimos que deje de cargar la página por defecto
    event.preventDefault()

    // Ahora desaparece la página de login y aparece la de registro
    loginView.style.display = 'none';
    registerView.style.display = '';
}

// SUBMIT FOR LOGIN, entregar el login, enviar el login

//declaramos una variable para el formulario de login con id login-form en el html
var loginForm = loginView.querySelector('#login-form')

// Cuando clicamos en submit crea un evento
loginForm.onsubmit = function (event) {

    //evitamos que recargue la página cuando le damos a submit
    event.preventDefault()

    // declaramos dos variables para copiar y almacenar los inputs email y password 
    var emailInput = loginForm.querySelector('#email-login')
    var passwordInput = loginForm.querySelector('#password-login')

    var email = emailInput.value
    var password = passwordInput.value

  
    var foundUser = null

    // creamos un bucle "for" para recorrer el array con los datos de los usuarios
    for (var i = 0; i < users.length; i++) {

        // declaramos una variable usuario para que vaya recogiendo las iteraciones
        var user = users[i]

        // condición if, si el valor del email de un usuario, dentro del array usuarios, es estrictamente igual al valor del campo email, del login, introducido por el usuario, usuario encontrado 
        if (user.email === email) {
            foundUser = user

            //sale del bucle
            break
        }
    }

    // si la variable usuario encontrado es nula, te dice que los datos que has puesto no son correctos
    if (foundUser === null) {
        alert('Wrong credentials')
// salimos
        return
    }

    // si la contraseña no es estrictamente igual
    if (foundUser.password !== password) {
        alert('Wrong credentials')

        return
    }
    // limpiamos los campos de los imputs
    emailInput.value = ''
    passwordInput.value = ''

    // desaparece la página de login 
    loginView.style.display = 'none'

    // RENDER USER NAME IN HEADER

    // declaramos una variable, le asignamos el elemento id user-name-span y le decimos que escriba en ese elemento la propiedad name del usuario encontrado
    var userNameSpan = homeView.querySelector('#user-name-span')
    userNameSpan.innerText = foundUser.name

    loggedInEmail = foundUser.email 

    // RENDER POSTS

    // El div donde van a ir los artículos
    var postsList = homeView.querySelector('#posts-list')

    // declaramos un bucle for para que recorra el array posts que está en data.js
    for (var i = posts.length -1; i >= 0; i--) {

        // esta variable va recogiendo las iteraciones del for en el array posts
        var post = posts[i]

        // declaramos una variable artículo para crear una etiqueta en el html, con el createElement
        var article = document.createElement('article')
        article.setAttribute('class', 'articles')

        // se va creando el post con los elementos que hemos introducido en los imputs del form post

        var span = document.createElement('span')
        span.innerText = post.author 

        // creamos la parte del post con las imágenes
        var image = document.createElement('img')
        image.setAttribute('class', 'post-image')
        image.src = post.image
        image.alt = post.text
     

        //creamos la parte del texto del post
        var paragraph = document.createElement('p')
        paragraph.innerText = post.text

        // en la variable artículo, declarada o creada arriba, agregamos como hijos las etiquetas span, image y párrafo
        article.appendChild(span)
        article.appendChild(image)
        article.appendChild(paragraph)

        // a la variable postList, que es el div donde van a ir los post, le agregamos como hijo la etiqueta article
        
        postsList.appendChild(article)
    }

    // Aparece la pantalla sel home
    homeView.style.display = ''
} 