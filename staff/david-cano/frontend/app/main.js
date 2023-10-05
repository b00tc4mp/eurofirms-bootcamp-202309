var registerView = document.getElementById("register-view");
var loginView = document.getElementById("login-view");
var homeView = document.getElementById("home-view");

registerView.style.display = "none";
//.style.display = "";
homeView.style.display = "none";

var loginLink = registerView.querySelector("#login-link");
loginLink.onclik = function (event) {
event.preventDefault();

registerView.style.display = "none";
loginView.style.display = "";
    
}

var registerLink = loginView.querySelector("#register-link");
registerLink.onclick = function (event) {
    event.preventDefault();

    registerView.style.display = "";
    loginView.style.display = "none";
}

var registerForm = registerView.querySelector("#register-form");
registerForm.onsubmit = function (event) {
    event.preventDefault();

    var nameInput = registerForm.querySelector("#name-input");
    var emailInput = registerForm.querySelector("#email-input");
    var passwordInput = registerForm.querySelector("#password-input");

    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    console.log(name, email, password);

    registerView.style.display = "none";
    loginView.style.display ="";
}

var loginForm = loginView.querySelector("#login-form");
loginForm.onsubmit = function (event) {
    event.preventDefault();

    var emailInput = loginForm.querySelector("#email-input");
    var passwordInput = loginForm.querySelector("#password-input");

    var email = emailInput.value;
    var password = passwordInput.value;

    console.log(email, password);

    homeView.style.display = "";
    loginView.style.display ="none";

    
}