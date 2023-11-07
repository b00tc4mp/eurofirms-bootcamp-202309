function toggleLikePost(email, postIndex) {
    validateEmail(email)
    validateNumber(postIndex, 'Post index')

    var foundUser = find(users, function (user) {
        return user.email === email
    })

    if (foundUser === undefined) throw new Error('wronn credentials')

    if (postIndex >= posts.length) throw new RangeError('Post index is out of range')

    var post = posts[postIndex]

    var emailIndex = post.likes.indexOf(email)

    if (emailIndex < 0) post.likes.push(email)
    else
        post.likes.splice(emailIndex, 1)
}

