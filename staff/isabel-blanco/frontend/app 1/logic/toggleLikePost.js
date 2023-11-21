function toggleLikePost(email, postIndex) {
    validateEmail(email)
    validateNumber(postIndex, 'post index')

    var foundUser = find(users, function (user) {
        return user.email === email
    })

    if (foundUser === undefined)
        throw new Error('wrong credentials')

    if (postIndex >= postIndex.length)
        throw new RangeError('post index is out of range')

    var post = posts[postIndex]

    var emailIndex = post.likes.indexOf(email)

    if (emailIndex < 0)
        post.likes.push(email)
    else
        post.likes.splice(emailIndex, 1)
}