// ESTO CORRESPONDE AL HTML

// home view (*1)

// Obtains the id element 'home-view' 
var homeView = document.getElementById('home-view');

// Hides home view
homeView.style.display = 'none';

// The logout button from the HTML
var logoutButton = homeView.querySelector('#logout-button');

// Event on click button
logoutButton.onclick = function () {
    // Hides home view
    homeView.style.display = 'none';
//Posts already created

    var postsList = homeView.querySelector("#post-list")
    postsList.innerHTML = ""

    loggedInEmail = null

    loginView.style.display = '';
};
//A button for post 
var postButton = homeView.querySelector("#post-button");
postButton.onclick = function(){

 postPanel.style.display =""  
}
//hide form, creates post panel
var postPanel = homeView.querySelector("#post-panel");
postPanel.style.display = 'none';
//se crea el post formulario del post panel"
var postForm = postPanel.querySelector("#post-form");

//A cancel button
var cancelPostButton = postForm.querySelector("#cancel-post-button")

cancelPostButton.onclick = function(event){
postForm.reset()
postPanel.style.display = "none"
}
//The submit button 
postForm.onsubmit =function(event){
    event.preventDefault()
//
var imageInput = postForm.querySelector("#image-input")
var textInput = postForm.querySelector("#text-input")

var image = imageInput.value
var text = textInput.value
var post = {}

//Verifyes user info
post.author = loggedInEmail
post.image = image
post.text = text

posts.push(post)
postForm.reset()
postPanel.style.display = "none"

var postsList = homeView.querySelector("#post-list") 
postsList.innerHTML = ""

//Create the post with the info
for (var i = posts.length -1; i >= 0; i--){
    var post = posts[i]

    var article = document.createElement("article")
    article.setAttribute('class', 'post-article');

    var span = document.createElement("span")
    span.innerText = post.author

    var image = document.createElement("img")
    image.setAttribute("class", "post-image")
    image.src = post.image
    image.alt = post.text  

    var paragraph = document.createElement("p")
    paragraph.innerText = post.text

    article.appendChild(span)
    article.appendChild(image)
    article.appendChild(paragraph)

    postsList.appendChild(article)
}

 }



