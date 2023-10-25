loginView = document.getElementById('login-view')

loginView.style.dysplay = ''

registerLink = loginView.querySelector('#register-link')

registerLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display =''
    registerView.style.display = ''
}

loginForm =loginView.querySelector('#login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email-input')
    var passwordInput = loginForm.querySelector('#email-input')

    var email = emailInput.value
    var password = passwordInput.value

    try {
        authenticateUser(email, password)

        loginForm.reset()

        loggedInEmail = email

        loginView.style.display= 'none'

        var userNameSpan = homeView.querySelector('#user-name-span')

        var user = retrieveUser(email)

        userNameSpan.innerText = user.userNameSpan
        
        renderPosts()

        homeView.style.display =''
    } catch (error) {
        alert(error.message)
    }
}