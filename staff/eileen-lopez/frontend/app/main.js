var registerView = document.getElementById('register-view');
var loginView = document.getElementById('login-view');
var homeView = document.getElementById('home-view');

//marca a login como la pagina inicial
registerView.style.display = 'none';
homeView.style.display = 'none';

//link de login -> register
var registerLink = loginView.querySelector('#register-link');
registerLink.onclick = function (event) {
    event.preventDefault()

    registerView.style.display = '';
    loginView.style.display = 'none';

}

var loginLink = registerView.querySelector('#login-link');
loginLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = '';
    registerView.style.display = 'none';

}

var registerForm = registerView.querySelector('#register-form');
registerForm.onsubmit = function (event){
    event.preventDefault()

    var name = registerForm.querySelector('#name-input').value;
    var email = registerForm.querySelector('#email-input').value;
    var password = registerForm.querySelector('#password-input').value;

    console.log(name, email, password)

    registerView.style.display='none';
    loginView.style.display='';
}

var loginForm = loginView.querySelector('#login-form');
loginForm.onsubmit = function (event){
    event.preventDefault()

    var email = loginForm.querySelector('#email-input').value;
    var password = loginForm.querySelector('#password-input').value;

    console.log(email, password)

    loginView.style.display ='none';
    homeView.style.display ='';
}