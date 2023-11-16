
homeView = document.getElementById('home-view')

homeView.style.display = 'none'

logoutButton = homeView.querySelector('#logout-button')

logoutButton.onclick = function () {
    homeView.style.display = 'none'

    var postsList = homeView.querySelector('#posts-list')
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
    event.preventDefault()

    newPostForm.reset()

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

    try {
        createNewPost(loggedInEmail, image, imageDescription, text)

        newPostForm.reset()

        newPostPanel.style.display = 'none'

        renderPosts()
    } catch (error) {
        alert(error.message)
    }
}



function renderPosts() {
    try {
        var posts = retrievePosts(loggedInEmail)

        var postsList = homeView.querySelector('#posts-list')

        postsList.innerHTML = ''

        for (var i = posts.length - 1; i >= 0; i--) {
            var post = posts[i]

            var article = document.createElement('article')
            article.setAttribute('aria-label', 'Post')
            var h3 = document.createElement('h3')
            h3.innerText = post.author //The aria-level label is removed due to compatibility issues with the screen reader and the h3 tag.


            var image = document.createElement('img')
            image.setAttribute('class', 'post-image')
            image.src = post.image
            image.alt = post.imageDescription

            var paragraph = document.createElement('p')
            paragraph.innerText = post.text

            article.appendChild(h3)
            article.appendChild(image)
            article.appendChild(paragraph)

            postsList.appendChild(article)
        }
    } catch (error) {
        alert(error.message)
    }
}