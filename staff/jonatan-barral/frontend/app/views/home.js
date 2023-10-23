// home view

homeView = document.getElementById('home-view')

homeView.style.display = 'none'

logoutButton = homeView.querySelector('#logout-button')

logoutButton.onclick = function () {
    homeView.style.display = 'none'

    var postsList = homeView.querySelector('#posts-list')
    postsList.innerHTML = ''

    loginView.style.display = ''
}

// post panel

newPostPanel = homeView.querySelector('#new-post-panel')

newPostPanel.style.display = 'none'

// post form

newPostForm = newPostPanel.querySelector('#new-post-form')

// post button

newPostButton = homeView.querySelector('#new-post-button')

newPostButton.onclick = function () {
    newPostPanel.style.display = ''
}

// cancel post button

cancelPostButton = newPostForm.querySelector('#cancel-post-button')

cancelPostButton.onclick = function (event) {
    event.preventDefault()

    newPostForm.reset()

    newPostPanel.style.display = 'none'
}

// submit post form

newPostForm.onsubmit = function (event) {
    event.preventDefault()

    var imageInput = newPostForm.querySelector('#image-input')
    var imageDescriptionInput = newPostForm.querySelector('#image-description-input')
    var textInput = newPostForm.querySelector('#text-input')

    var image = imageInput.value
    var imageDescription = imageDescriptionInput.value
    var text = textInput.value

    var post = {}
    post.author = loggedInEmail

    post.image = image
    post.imageDescription = imageDescription
    post.text = text

    posts.push(post)

    newPostForm.reset()

    newPostPanel.style.display = 'none'

    renderPosts()
}

// render posts

function renderPosts() {
    var postsList = homeView.querySelector('#posts-list')

    postsList.innerHTML = ''

    for (var i = posts.length - 1; i >= 0; i--) {
        var post = posts[i]

        var article = document.createElement('article')
        article.setAttribute('aria-label', 'Post')

        var span = document.createElement('span')
        span.innerText = post.author
        span.setAttribute('aria-label', 'author')
        var image = document.createElement('img')
        image.setAttribute('class', 'post-image')
        image.src = post.image
        image.alt = post.imageDescription


        var paragraph = document.createElement('p')
        paragraph.innerText = post.text

        article.appendChild(span)
        article.appendChild(image)
        article.appendChild(paragraph)

        postsList.appendChild(article)
    }
}