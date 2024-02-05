function toggleLikePost(email, postIndex) {
    validateEmail(email)
    validateNumber(postIndex, "post Index")

    var foundUser = find(users, function (user) {
        return user.email === email
    })
    if (foundUser === undefined)
        throw new Error("Wrong credentials")

    //voy a comprobar si el post al q se le quiere dar a me gusta, esta en la base de datso
    if (postIndex >= posts.length)
        throw new RangeError("Post index out of range")

    var post = posts[postIndex]


    //es para que solo puede dar a me gusta los email de la base de datos
    var emailIndex = post.likes.indexOf(email)

    if (emailIndex < 0)
        post.likes.push(email)
    else
        post.likes.splice(emailIndex, 1)

}