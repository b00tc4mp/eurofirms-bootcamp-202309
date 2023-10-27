//Home view

homeView = document.getElementById('home-view')
homeView.style.display = 'none'

logoutButton = homeView.querySelector('#logout-button')

logoutButton.onclick = function (){
    homeView.style.display = 'none'

    var postsList = homeView.querySelector('#posts-list')
    postsList.innerHTML = ''

    loginView.style.display = ''
}

//Post panel
newPostPanel = homeView.querySelector('#new-post-panel')

newPostPanel.style.display = 'none'

//Post form
newPostForm = newPostPanel.querySelector('#new-post-form')

//Post button
newPostButton = homeView.querySelector('#new-post-button')

newPostButton.onclick = function (){
    newPostPanel.style.display = ''
}

//Cancel post button
cancelNewPostButton = newPostForm.querySelector('#cancel-new-post-button')

cancelNewPostButton.onclick = function (event){
    event.preventDefault()

    newPostForm.reset()

    newPostPanel.style.display = 'none'
}

//Submit post form
newPostForm.onsubmit = function (event){
    event.preventDefault()

    var imageInput = newPostForm.querySelector('#image-input')
    var imageDescriptionInput = newPostForm.querySelector('#image-description-input')
    var textInput = newPostForm.querySelector('#text-input')

    var image = imageInput.value
    var imageDescription = imageDescriptionInput.value
    var text = textInput.value

    try{
        createNewPost(loggedInEmail, image, imageDescription, text)

        newPostForm.reset()

        newPostPanel.style.display = 'none'

        renderPosts()
    } catch (error){
        alert(error.message)
    }
}

//Render posts
function renderPosts(){
    try{
        var posts = retrievePosts(loggedInEmail)

        var postsList = homeView.querySelector('#posts-list')

        postsList.innerHTML = ''

            for(var i = posts.length - 1; i > -1; i--){
            var post = posts[i]

            var article = document.createElement('article')
            article.setAttribute('aria-label', 'Post')

            var h3 = document.createElement('h3')
            h3.innerText = post.author

            var image = document.createElement('img')
            image.setAttribute('class', 'post-image')
            image.src = post.image
            image.alt = post.imageDescription

            var paragraph = document.createElement('p')
            paragraph.innerText = post.text

            var likeButton = document.createElement('button')
            likeButton.setAttribute('class', 'button')

            var liked = post.likes.includes(loggedInEmail)

            likeButton.innerText = (liked ? '😍' : '😒') + ' ' + post.likes.length + ' likes'

            function createLikeButtonOnClick(postIndex){
                //Closure
                return function (){ 
                    toggleLikePost(loggedInEmail, postIndex)

                    renderPosts()
                }
            }

            likeButton.onclick = createLikeButtonOnClick(i)

            article.appendChild(h3)
            article.appendChild(image)
            article.appendChild(paragraph)
            article.appendChild(likeButton)
            
            postsList.appendChild(article)
        }
    } catch (error){
        alert(error.message)
    }
}