//esta sería la base de datos vacía
var users=[]
// mete los datos "a la fuerza", como si se hubiesen introducido en el formulario de registro
users[0]={name:"Peter Parker", email:"peter@parker.com", password:"123456"}
users[1]={name:"Mary Jane", email:"mary@jane.com", password:"456789"}

// esto es el register view

var registerView = document.getElementById('register-view')

registerView.style.display = 'none'

// para ir al login

var loginLink = registerView.querySelector('#login-link')

loginLink.onclick = function (event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = ''
}

// Asigna a "registerForm" el elemento que tenga el id "register-form"

var registerForm = registerView.querySelector('#register-form')

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.querySelector('#name-input')
    var emailInput = registerForm.querySelector('#email-input')
    var passwordInput = registerForm.querySelector('#password-input')

    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value

    //crea un objeto
    var user={}
    //recoge los valores del documento y se los asigna al objeto
    user.name=name
    user.email=email
    user.password=password
    //enviamos el objeto "user" a la base de datos llamada "users"
    users.push(user)
    //Esto limpia el formulario
    nameInput.value="";
    emailInput.value="";
    passwordInput.value="";

    //Esto es para que desaparezca el registro y aparezca el login
    registerView.style.display="none";
    loginView.style.display="";

}

// Ventana del login

var loginView = document.getElementById('login-view')

loginView.style.display = ''

// Para ir a register

var registerLink = loginView.querySelector('#register-link')

registerLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = ''
}

// Asigna a "loginForm" el elemento del id "login-form"

var loginForm = loginView.querySelector('#login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email-input')
    var passwordInput = loginForm.querySelector('#password-input')

    var email = emailInput.value
    var password = passwordInput.value

    //Crea una variable, declarada pero no inicializada (no le asignamos el valor al declararla), de la cual tenemos el control
    var foundUser=null

    //Se crea un bucle para recorrer la base de datos "users"
    for(var i=0; i<users.length;++i){
        var user=users[i]

        if(user.email ===email){
            foundUser=user;
            break
        }

    }
    if (foundUser===null){
        alert("wrong credentials");
        return
    }
    if(foundUser.password !==password){
        alert("wrong credentials");
        return
    }
    //esto es para limpiar el formulario
    emailInput.value=""
    passwordInput.value=""

    //esto es para que aparezca el home y desaparezca el login
    loginView.style.display="none";
    homeView.style.display="";
}


// Pagina home

var homeView = document.getElementById('home-view')

homeView.style.display = 'none';

//creamos una variable para que nos traiga el elemento con el id logout-button
var logoutButton=homeView.querySelector("#logout-button");
logoutButton.onclick=function(){
    //para que desaparezca el home y aparezca el login
    homeView.style.display="none";
    loginView.style.display=""
}