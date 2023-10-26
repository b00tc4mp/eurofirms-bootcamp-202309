loginView = document.getElementById('login-view')

loginView.style.display = ''

registerLink = loginView.querySelector('#register-link')

registerLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = ''
}

loginForm = loginView.querySelector('#login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email-input')
    var passwordInput = loginForm.querySelector('#password-input')

    var email = emailInput.value
    var password = passwordInput.value

    // search user by email
    try {
        authenticateUser(email, password)
        loginForm.reset()

        loggedInEmail = email

        loginView.style.display = 'none'

        var userNameSpan = homeView.querySelector('#user-name-span')
        var user = retrieveUser(email)
        userNameSpan.innerText = user.name

        renderPosts()

        homeView.style.display = ''
    } catch (error) {
        alert(error.message)
    }
}