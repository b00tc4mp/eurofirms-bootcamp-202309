homeView = document.getElementById('home-view')

homeView.style.display = 'none'

logoutButton = homeView.querySelector('#logout-button')

logoutButton.onclick = function() {
    homeView.style.display = 'none'

    var postsList =homeView.querySelector('#posts-list')
    postsList.innerHTML = ''

    loginView.style.display = ''
}

newPostPanel = homeView.querySelector('#new-post-panel')

newPostPanel.style.display = 'none'

newPostForm = newPostPanel.querySelector('#new-post-form')

newPostButton = homeView.querySelector('#new-post-button')

newPostButton.onclick = function () {
    newPostPanel.style.display = ''
}

cancelNewPostButton = newPostForm.querySelector('#cancel-new-post-button')

cancelNewPostButton.onclick = function (event) {
    event.preventDefault ()

    newPostForm.reset ()

    newPostPanel.style.display = 'none'
}

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