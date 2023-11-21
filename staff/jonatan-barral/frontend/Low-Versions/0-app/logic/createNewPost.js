function createNewPost(email, image, imageDescription, text) {
    validateEmail(email)
    validateUrl(image, 'image URL')
    validateText(imageDescription, 'Image description')
    validateText(text, 'Text')

    var foundUser = find(users, function (user) {
        return user.email === email
    })
    if (foundUser === undefined) throw new Error('User not found')

    var post = {}
    post.author = email
    post.image = image
    post.imageDescription = imageDescription
    post.text = text

    posts.push(post)
}   