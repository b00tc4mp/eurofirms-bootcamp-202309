//home view
var homeView = document.getElementById("home-view")

homeView.style.display = "none"

var logoutButton = homeView.querySelector("#logout-button")
//se pone onclick cdo no hay formulario, y onsubmit cdo hay formulario
logoutButton.onclick = function () {
    homeView.style.display = "none"

    // el postList sale de login, se pone aqui para no cargar los mismos post cada vez q entre un usuario
    var postsList = homeView.querySelector("#posts-list")
    // y para limpiarlos se hace asi, limpiar los elementos fijos de html
    postsList.innerHTML = ""

    loginView.style.display = ""
}
// vamos a mecanizar el button +, el del form del post
//post form, este es es formulario para crear un post, se hace esto para que cdo se abra la app el formulario aparezca oculto
var postPanel = homeView.querySelector("#post-panel")
postPanel.style.display = "none"

var postForm = postPanel.querySelector("#post-form")

//cdo se haga click q aparezca el formulario
var postButton = homeView.querySelector("#post-button")
postButton.onclick = function () {
    postPanel.style.display = ""
}

//que se cierre el formulario cd se de a este boton +
var cancelPostButton = postForm.querySelector("#cancel-post-button")
cancelPostButton.onclick = function (event) {
    event.preventDefault()
    //para que se limpien los campos
    postForm.reset()
    //para que desaparezca
    postPanel.style.display = "none"
}

//sumit post form (subir el formulario de los post)

