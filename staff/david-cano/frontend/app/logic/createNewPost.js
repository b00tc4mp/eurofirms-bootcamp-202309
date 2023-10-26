function createNewPost(email, image, imageDescription, text){
    validateEmail(email)
    validateUrl(image, 'image url')
    validateText(imageDescription, 'image description')
    validateText(text, 'text')

    //Search user by email
    var foundUser = find(users, function (user){
        return user.email === email
    })

    //If user not found then error
    if(foundUser === undefined)
        throw new Error('User not found')

    var post = {}
    post.author = email
    post.image = image
    post.imageDescription = imageDescription
    post.text = text

    posts.push(post)
}