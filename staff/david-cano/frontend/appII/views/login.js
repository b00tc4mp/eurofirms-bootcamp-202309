//Login view

loginView = document.getElementById('login-view')
loginView.style.display = ''

//Navigation to register
registerLink = loginView.querySelector('#register-link')

registerLink.onclick = function (event){
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = ''
}

//Submit login
loginForm = loginView.querySelector('#login-form')

loginForm.onsubmit = function (event){
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email-input')
    var passwordInput = loginForm.querySelector('#password-input')

    var email = emailInput.value
    var password = passwordInput.value

    try{
        authenticateUser(email, password)

        loginForm.reset()

        loggedInEmail = email

        loginView.style.display = 'none'

    //Render user name in header
        var userNameSpan = homeView.querySelector('#user-name-span')

        var user = retrieveUser(email)

        userNameSpan.innerText = user.name

    //Render posts in body
        renderPosts()

        homeView.style.display = ''
    } catch (error){
        alert(error.message)
    }
}