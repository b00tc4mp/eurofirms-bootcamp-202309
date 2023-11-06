function createNewPost(email, image, imageDescription, text) {
    validateEmail(email)
    validateUrl(image, 'image url')
    validateText(imageDescription, 'image description')
    validateText(text, 'text')

    var foundUser = find(users, function (user){
        return user.email === email
    })

    if (foundUser === undefined)
        throw new Error('User not found')

    var post = {}
    post.id = createId()
    post.author = email
    post.image = image
    post.imageDescription = imageDescription
    post.text = text
    post.likes = []

    posts.push(post)
}