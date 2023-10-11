// home view

var homeView = document.getElementById('home-view')

homeView.style.display = 'none'

var logoutButton = homeView.querySelector('#logout-button')

logoutButton.onclick = function () {
    homeView.style.display = 'none'

    var postsList = homeView.querySelector('#posts-list')
    postsList.innerHTML = ''

    loginView.style.display = ''
}

// post panel

var postPanel = homeView.querySelector('#post-panel')

postPanel.style.display = 'none'

// post form

var postForm = postPanel.querySelector('#post-form')

// post button

var postButton = homeView.querySelector('#post-button')

postButton.onclick = function () {
    postPanel.style.display = ''
}

// cancel post button

var cancelPostButton = postForm.querySelector('#cancel-post-button')

cancelPostButton.onclick = function (event) {
    event.preventDefault()

    postForm.reset()

    postPanel.style.display = 'none'
}

// submit post form

postForm.onsubmit = function (event) {
    event.preventDefault()

    var imageInput = postForm.querySelector('#image-input')
    var textInput = postForm.querySelector('#text-input')

    var image = imageInput.value
    var text = textInput.value

    var post = {}
    post.author = loggedInEmail
    post.image = image
    post.text = text

    posts.push(post)

    postForm.reset()

    postPanel.style.display = 'none'

    var postsList = homeView.querySelector('#posts-list')

    postsList.innerHTML = ''

    for (var i = posts.length - 1; i >= 0; i--) {
        var post = posts[i]

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
}