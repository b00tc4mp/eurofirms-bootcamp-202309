
var loggedInEmail = null;

function renderPost() {

    var postsList = homeView.querySelector('#posts-list');
    postsList.innerHTML = '';

    for (var i = posts.length - 1; i >= 0; i--) { 
        var post = posts[i];

        var article = document.createElement('article');
        article.setAttribute('class', 'articles');
        article.setAttribute('aria-label', 'Post')

        var span = document.createElement('span');
        span.innerText = post.author;
        span.setAttribute('aria-label', 'author')

        var image = document.createElement('img');
        image.setAttribute('class', 'post-image');
        image.src = post.image;
        image.alt = post.imageDescription;

        var paragraph = document.createElement('p');
        paragraph.innerText = post.text;

        article.appendChild(span);
        article.appendChild(image);
        article.appendChild(paragraph);

        postsList.appendChild(article);
    }
}