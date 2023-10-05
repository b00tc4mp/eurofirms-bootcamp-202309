
//Nombramos 3 variables, para el home, el registro y el login
var homeView = document.getElementById("home-view");
var registerView = document.getElementById("register-view");
var loginView = document.getElementById("login-view");

// Al cargar la página, mostramos el formulario de login quitándole la clase off
loginView.classList.remove("off");
// Cuando se hace click en el enlace "Register", mostramos el formulario del registro
// Creamos un variable para el ancor del registro
var navigateToRegister = loginView.querySelector("#register-navigate");
// A esa variable le aplicamos el metodo onclik
navigateToRegister.onclick = function (event) {
    event.preventDefault();
// Para que aparezca el formulario registro y desaparezca el de login
    registerView.classList.remove("off");
    loginView.classList.add("off");    
};

// Cuando se hace click en el enlace "Login", mostramos el formulario de login, inicio de sesión
// Creamos un variable para el ancor del login
var navigateToLogin = registerView.querySelector("#login-navigate");
// A esa variable le aplicamos el metodo onclik
navigateToLogin.onclick = function (event) {
    event.preventDefault();
    // Para que aparezca el formulario de login y desaparezca el de registro
    loginView.classList.remove("off");
    registerView.classList.add("off");
};

// Cuando se hace click en el boton "del registro", mostramos el formulario de Login y pintamos en consola los valores del formulario registro
// Creamos una variable para el boton del registro
var registerButton = document.getElementById("register-button");
// A esa variable le aplicamos el metodo onclik
registerButton.onclick = function (event) {
    event.preventDefault();
// Recuperamos los datos del formulario Register y los pinta en consola
//Creamos 3 variables, una para el input name del registro, otra para el email, otra para el password, recogemos sus valores y pintamos en consola
    var name = document.getElementById("name-input").value;
    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;
    console.log(name, email, password);
// Para que aparezca el formulario de login y desaparezca el de registro
    loginView.classList.remove("off");
    registerView.classList.add("off");
};

// Cuando hacemos click en el botón " del Login", muestra el home y pinta en consola los valores del formulario login
// Creamos un variable para el boton del login
var loginButton = document.getElementById("login-button");
// A esa variable le aplicamos el metodo onclik
loginButton.onclick = function (event) {
    event.preventDefault();
// Recupera los datos del formulario login y los pinta en consola
//Creamos 2 variables, una para el input email del login y otra para el password, recogemos sus valores y pintamos en consola
    var emailLogin = document.getElementById("email-input-login").value;
    var passwordLogin = document.getElementById("password-input-login").value;
    console.log(emailLogin, passwordLogin);
// Para que aparezca el formulario de home y desaparezca el de login
    loginView.classList.add("off");
    homeView.classList.remove("off");
};
