function toggleLikePost (email, postId) {
    validateEmail(email)
    validateText(postId, 'post id')

    var foundUser = find(users, function(user){
        return user.email === email
    })

    if (foundUser === undefined)
        throw new Error('User not found')

        var post = find(posts, function(post){
            return post.id === postId
        })

    if  (post === undefined)
        throw new Error('Post not found')


    var emailIndex = post.likes.indexOf(email)

    if (emailIndex < 0)
        post.likes.push(email)
    else 
        post.likes.splice(emailIndex, 1)
}