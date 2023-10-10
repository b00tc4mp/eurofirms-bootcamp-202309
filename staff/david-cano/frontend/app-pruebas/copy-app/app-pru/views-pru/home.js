// HOME VIEW, div que contiene la página de home
// declaramos una variable "homeView", para el div que contiene el home, con el id home-view en el html
var homeView = document.getElementById('home-view')

// le aplicamos un estilo display none para que no aparezca en pantalla
homeView.style.display = 'none'

// declaramos una variable para el botón de loguearse, en la página del home, con un id logout-button en el html
var logoutButton = homeView.querySelector('#logout-button')

// le aplicamos el método onclick (pk no es un formulario)
logoutButton.onclick = function () {

// le decimos que desaparezca el home y aparezca el login
    homeView.style.display = 'none'
    loginView.style.display = ''
}

