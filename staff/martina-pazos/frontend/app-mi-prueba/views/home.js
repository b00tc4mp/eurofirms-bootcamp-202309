// home view es la parte de la home de la app 

var homeView = document.getElementById('home-view')
// aqui se apaga la homeViex con el 'none'
homeView.style.display = 'none'
//este es el boton de logout de la homeWien, apaga la homeView y enciende el loginView
var logoutButton = homeView.querySelector('#logout-button')

logoutButton.onclick = function () {
    homeView.style.display = 'none'
    loginView.style.display = ''
}