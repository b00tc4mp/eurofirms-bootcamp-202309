function editPost(loggedInEmail, image, imageDescription, text){
    validateEmail(email)
    validateUrl(image, 'image url')
    validateText(imageDescription, 'image description')
    validateText(text, 'text')

    // search user by email

    if (loggedInEmail !== post.author) {
        throw new Error ('you can only delete your own posts')
    }

    var post = {}
    post.author = loggedInEmaily
    post.image = image
    post.imageDescription = imageDescription
    post.text = text
    post.likes = []

    posts.push(post)
}