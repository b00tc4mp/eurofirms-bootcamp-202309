var loginView = document.getElementById('login-view')
var reprisesView = document.getElementById('reprises-view')
var eventsView = document.getElementById('events-view')


var loginForm = loginView.querySelector('#login-form')
loginForm.onsubmit = function(event){
    event.preventDefault()

    var emailLogin = event.target['email-input-login'].value
    var passwordLogin = event.target['password-input-login'].value

 console.log(emailLogin, passwordLogin) 
 
 loginView.classList.add('off')
 homeView.classList.remove('off')
 
}

var navigateToRegister = loginView.querySelector('#register-navigate')
navigateToRegister.onclick = function(event){
    event.preventDefault()

    loginView.classList.add('off')
    registerView.classList.remove('off')

} 

var navigateToLogin = registerView.querySelector('#login-navigate')
navigateToLogin.onclick = function(event){
    event.preventDefault()

    registerView.classList.add('off')
    loginView.classList.remove('off')
}