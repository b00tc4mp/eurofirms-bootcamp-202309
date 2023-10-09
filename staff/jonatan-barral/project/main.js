
        // Obtain references to HTML elements by their IDs
var loginView = document.getElementById('login-view'); // The login view
var reprisesView = document.getElementById('reprises-view'); // The reprises view
var eventsView = document.getElementById('events-view'); // The events view
var headView = document.getElementById('head-view'); // The main view
var dressageView = document.getElementById('dressage-view'); // The dressage view
var paralimpicView = document.getElementById('paralimpic-view'); // The paralimpic view

// Hide all views except for the login view
loginView.style.display = '';
reprisesView.style.display = 'none';
eventsView.style.display = 'none';
headView.style.display = 'none';
dressageView.style.display = 'none';
paralimpicView.style.display = 'none';

// User data
var users = [
    { name: 'JuezC', password: '123123123' },
    { name: 'secretaria', password: '123123123' }
];

// Obtain the login form within the login view
var loginForm = loginView.querySelector('#login-form');
loginForm.onsubmit = function (event) {
    event.preventDefault();

    var usernameInput = loginForm.querySelector('#user');
    var passwordInput = loginForm.querySelector('#password-login');

    var username = usernameInput.value;
    var password = passwordInput.value;

    var foundUser = null;

    for (var i = 0; i < users.length; i++) {
        var user = users[i];

        if (user.name === username) {
            foundUser = user;
            break;
        }
    }

    if (foundUser === null || foundUser.password !== password) {
        alert('Incorrect credentials');
        usernameInput.value = '';
        passwordInput.value = '';
    
        return;
    }

    usernameInput.value = '';
    passwordInput.value = '';

    loginView.style.display = 'none';
    headView.style.display = '';
};

// Manage links and buttons to switch views
var reprisesLink = headView.querySelector('#reprises-link');
reprisesLink.onclick = function (event) {
    event.preventDefault();
    headView.style.display = 'none';
    reprisesView.style.display = '';
};

var reprisesGoBack = reprisesView.querySelector('#go-back');
reprisesGoBack.onclick = function(event) {
    event.preventDefault();

    reprisesView.style.display = 'none';
    headView.style.display = '';
};

var dressageLink = reprisesView.querySelector('#dressage-link');
dressageLink.onclick = function (event) {
    event.preventDefault();
    reprisesView.style.display = 'none';
    dressageView.style.display = '';
};

var goBackDressage = dressageView.querySelector('#go-back');
goBackDressage.onclick = function (event) {
    event.preventDefault();
    dressageView.style.display = 'none';
    reprisesView.style.display = '';
};

var paralimpicLink = reprisesView.querySelector('#paralimpic-link');
paralimpicLink.onclick = function (event) {
    event.preventDefault();
    reprisesView.style.display = 'none';
    paralimpicView.style.display = '';
};

var goBackParalimpic = paralimpicView.querySelector('#go-back');
goBackParalimpic.onclick = function (event) {
    event.preventDefault();
    paralimpicView.style.display = 'none';
    reprisesView.style.display = '';
};

var eventsLink = document.getElementById('events-link');
eventsLink.onclick = function(event) {
    event.preventDefault();

    headView.style.display = 'none';
    eventsView.style.display = '';
};

var goBackEvents = eventsView.querySelector('#go-back');
goBackEvents.onclick = function(event) {
    event.preventDefault();

    eventsView.style.display = 'none';
    headView.style.display = '';
};
