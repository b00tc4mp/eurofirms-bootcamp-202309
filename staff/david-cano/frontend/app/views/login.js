// LOGIN VIEW

var loginView = document.getElementById('login-view')

loginView.style.display = ''

// NAVIGATION TO REGISTER

var registerLink = loginView.querySelector('#register-link')

registerLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none';
    registerView.style.display = '';
}

// SUBMIT LOGIN

var loginForm = loginView.querySelector('#login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email-login')
    var passwordInput = loginForm.querySelector('#password-login')

    var email = emailInput.value
    var password = passwordInput.value

    var foundUser = null

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    if (foundUser === null) {
        alert('Wrong credentials')

        return
    }

    if (foundUser.password !== password) {
        alert('Wrong credentials')

        return
    }

    emailInput.value = ''
    passwordInput.value = ''

    loginView.style.display = 'none'

// RENDER POSTS

var postsList = homeView.querySelector('#posts-list')

for (var i = 0; i < posts.length; i++) {
    var post = posts [i]

    var article = document.createElement('article')

    var span = document.createElement('span')
    span.innerText = post.author

    var image = document.createElement('img')
    image.setAttribute('class', 'post-image')
    image.src = post.image

    var paragraph = document.createElement('p')
    paragraph.innerText = post.text

    article.appendChild(span)
    article.appendChild(image)
    article.appendChild(paragraph)

    postsList.appendChild(article)
   }

homeView.style.display = ''
}