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

// post form

var postForm = homeView.querySelector('#post-form')

postForm.style.display = 'none'

// post button

var postButton = homeView.querySelector('#post-button')

postButton.onclick = function () {
    postForm.style.display = ''
}

// cancel post button

var cancelPostButton = postForm.querySelector('#cancel-post-button')

cancelPostButton.onclick = function (event) {
    event.preventDefault()

    postForm.reset()
    postForm.style.display = 'none'
}