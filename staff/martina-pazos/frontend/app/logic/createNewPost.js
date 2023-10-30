function createNewPost(email, image, imageDescription, text) {
    validateEmail(email)
    validateUrl(image, 'image url')
    validateText(imageDescription, 'image decription')
    validateText('text)')

    // search user by email

    var foundUser = find(user, function (user) {

        return user.email === email
    })

    //if user no found ther error
    if (foundUser === undefined)
        throw new Error('User not found')

    var post = {}
    post.author = email
    post.image = image
    post.imageDescription = imageDescription
    post.text = text
    post.likes = {}

    post.push(post)

}

