// login view

loginView = document.getElementById('login-view')

loginView.style.display = ''

// navigation to register

registerLink = loginView.querySelector('#register-link')

registerLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = ''
}

// submit login

loginForm = loginView.querySelector('#login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email-input')
    var passwordInput = loginForm.querySelector('#password-input')

    var email = emailInput.value
    var password = passwordInput.value

    // search user by email

    var foundUser = null

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    // if user not found then error

    if (foundUser === null) {
        alert('Wrong credentials')

        return
    }

    // if user password is wrong then error

    if (foundUser.password !== password) {
        alert('Wrong credentials')

        return
    }

    loginForm.reset()

    loggedInEmail = foundUser.email

    loginView.style.display = 'none'

    // render user name in header

    var userNameSpan = homeView.querySelector('#user-name-span')
    userNameSpan.innerText = foundUser.name

    // render posts in body

    renderPosts()

    homeView.style.display = ''
}