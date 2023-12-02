// LOGIN VIEW: Este archivo maneja la vista de inicio de sesión y las interacciones relacionadas

// LOGIN VIEW, div que contiene el formulario de login
// declaramos una variable para el div que contiene el formulario de login "loginView" con el id login-view en el html
var loginView = document.getElementById('login-view')

// Inicialmente, mostramos la vista de inicio de sesión
// le damos un estilo display '' para que aparezca la pagina de login en pantalla
loginView.style.display = ''

// NAVIGATION TO REGISTER, enlace para navegar a la página de registro <a>
// declaramos una variable para el enlace al registro con el id register-link en el html
var registerLink = loginView.querySelector('#register-link')

// Cuando se hace clic en el enlace de registro, ocultamos la vista de inicio y mostramos la vista de registro
// le aplicamos el metodo onclick al enlace al registro en el formulario de login
registerLink.onclick = function (event) {

    // Prevenimos la acción predeterminada del enlace, le decimos que deje de cargar la página por defecto
    event.preventDefault()

    // hacemos que desaparezca la página de login y aparezca la de registro
    // Ocultamos la vista de inicio
    loginView.style.display = 'none';
    // Mostramos la vista de registro
    registerView.style.display = '';
}

// SUBMIT FOR LOGIN, entregar el login, enviar el login
//declaramos una variable para el formulario de login con id login-form en el html
var loginForm = loginView.querySelector('#login-form')

// le aplicamos el método onsubmit (pk es un formulario)
loginForm.onsubmit = function (event) {

    //le decimos que deje de cargar la página por defecto
    event.preventDefault()

    // declaramos 2 variables para los campos de los inputs email y contraseña que tengan los id email-login y password-login en el html dentro del formulario de login
    var emailInput = loginForm.querySelector('#email-login')
    var passwordInput = loginForm.querySelector('#password-login')

    // declaramos 2 variables para obtener el valor de los inputs email y contraseña introducidos por el usuario en el login
    var email = emailInput.value
    var password = passwordInput.value

    // declaramos una variable usuarioEncontrado, "foundUser", y le asignamos un valor nulo, vacío
    var foundUser = null

    // creamos un bucle for para recorrer el array usuarios
    for (var i = 0; i < users.length; i++) {

        // declaramos una variable usuario para que vaya recogiendo las iteraciones del for en el array usuarios al recorrerlo
        var user = users[i]

        // condición if, si el valor del email de un usuario, dentro del array usuarios, es estrictamente igual al valor del campo email, del login, introducido por el usuario, usuario encontrado 
        if (user.email === email) {
            foundUser = user

            //para, ya está
            break
        }
    }

    // si la variable usuario encontrado es nula, alerta: las credenciales son erroneas
    if (foundUser === null) {
        alert('Wrong credentials')
        // y salimos de la función con return
        return
    }

    // si la contraseña de algún usuario, dentro del array usuarios, no es estrictamente igual a la contraseña del campo password, del login, introducida por el usuario, alerta: las credenciales son erroneas 
    if (foundUser.password !== password) {
        alert('Wrong credentials')

        return
    }
    // limpiamos los campos de email y contraseña del formulario de login
    emailInput.value = ''
    passwordInput.value = ''

    // hacemos desaparecer la página de login 
    loginView.style.display = 'none'

    // RENDER USER NAME IN HEADER

    // declaramos una variable userNameSpan y le asignamos el elemento que tenga como id user-name-span y le decimos que escriba en ese elemento la propiedad name del usuario encontrado
    var userNameSpan = homeView.querySelector('#user-name-span')
    userNameSpan.innerText = foundUser.name

    //le asignamos a la variable loggedInEmail el valor del email del usuarioEncontrado (foundUser.email)
    loggedInEmail = foundUser.email

    // RENDER POSTS

    renderPost();

    homeView.style.display = ''


    // declaramos un bucle for para que recorra el array posts que está en data.js
    /*
    for (var i = posts.length -1; i >= 0; i--) {

        // declaramos una variable post para que vaya recogiendo las iteraciones del for en el array posts al recorrerlo
        var post = posts[i]

        // declaramos una variable artículo para crear una etiqueta en el html, con el createElement
        var article = document.createElement('article')
        article.setAttribute('class', 'articles')

        // declaramos una variable span, para crear una etiqueta en el html y le asignamos el valor de la variable post en su propiedad autor en el array posts al recorrerlo
        var span = document.createElement('span')
        span.innerText = post.author 

        // declaramos una variable imagen, para crear una etiqueta en el html y le ponemos una clase que se va a llamar post-image, además le asignamos a la imagen en su propiedad src el valor de la variable post en su propiedad image en el array posts al recorrerlo
        var image = document.createElement('img')
        image.setAttribute('class', 'post-image')
        image.src = post.image
        image.alt = post.text
        //image.setAttribute('alt', post.text)//----tiene la misma función?

        //declaramos una variable párrafo, para crear una etiqueta p en el html y le vamos a asignar el valor de la variable post en su propiedad text en el array posts al recorrerlo
        var paragraph = document.createElement('p')
        paragraph.innerText = post.text

        // en la variable artículo, declarada o creada arriba, agregamos como hijos las etiquetas span, image y p
        article.appendChild(span)
        article.appendChild(image)
        article.appendChild(paragraph)

        // a la variable postList, que es el div donde van a ir los post, le agregamos como hijo la etiqueta article
        postsList.appendChild(article)
    }
*/
    // aquí le decimos que aparezca el home
    
}