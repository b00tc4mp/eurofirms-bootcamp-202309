function createNewPost(userId, image, imageDescription, text) {
    validateEmail(userId, 'user id')
    validateUrl(image, 'image url')
    validateText(imageDescription, 'image description')
    validateText(text, 'text')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('user not found')

    db.createPost(userId, image, imageDescription, text)
}