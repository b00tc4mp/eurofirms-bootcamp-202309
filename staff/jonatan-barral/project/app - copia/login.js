
// Hide all views except for the login view
loginView.style.display = '';
reprisesView.style.display = 'none';
eventsView.style.display = 'none';
headView.style.display = 'none';
dressageView.style.display = 'none';
paralimpicView.style.display = 'none';


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
