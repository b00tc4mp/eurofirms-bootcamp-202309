//home view
var homeView = document.getElementById("home-view")

homeView.style.display = "none"

var logoutButton = homeView.querySelector("#logout-button")
//se pone onclick cdo no hay formulario, y onsubmit cdo hay formulario
logoutButton.onclick = function () {
    homeView.style.display = "none"
    loginView.style.display = ""
}


