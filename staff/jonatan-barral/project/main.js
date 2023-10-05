var loginView = document.getElementById('login-view')
var reprisesView = document.getElementById('reprises-view')
var eventsView = document.getElementById('events-view')
var headView = document.getElementById('head-view')
var loginButton = document.getElementById('login-button');

var loginForm = loginView.querySelector('#login-form')
loginForm.onsubmit = function(event){
event.preventDefault()  

    var nameLogin = event.target['login-secretaria'].value
    var passwordLogin = event.target['password-login'].value

    console.log(nameLogin, passwordLogin)
 
}

var navigateToHead = loginView.querySelector('#head-view-navigate')
navigateToHead.onsubmit = function(event){
    event.preventDefault()

    loginView.classList.add('off')
    headView.classList.remove('off')
 
} 

