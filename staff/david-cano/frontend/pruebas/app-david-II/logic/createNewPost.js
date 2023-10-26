function createNewPost(email, image, imageDescription, text){
    validateEmail(email)
    validateUrl(image, 'image url')
    validateText(imageDescription, 'image description');
    validateText(text, 'text')

    //search user by email
    var foundUser = find(users, function (user){
        return user.email === email
    });

    //if user not found then error
    if(foundUser === undefined)
        throw new Error('User not found (Usuario no encontrado)')

    var post = {};
    post.author = email
    post.image = image
    post.imageDescription = imageDescription;
    post.text = text

    posts.push(post)
}