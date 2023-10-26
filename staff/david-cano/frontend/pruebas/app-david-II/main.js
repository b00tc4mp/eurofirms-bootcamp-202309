
var loggedInEmail = null

function renderPost(){
    try{
        var posts = retrievePosts(loggedInEmail)

    var postsList = homeView.querySelector('#posts-list')
    postsList.innerHTML = ''

    for(var i = posts.length - 1; i >= 0; i--){ 
        var post = posts[i]

        var article = document.createElement('article');
        article.setAttribute('class', 'articles')
        article.setAttribute('aria-label', 'Post')

        var h3 = document.createElement('h3')
            h3.innerText = post.author
            h3.setAttribute('aria-label', 'author')

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
    }catch (error){
        alert(error.message)
    }
}