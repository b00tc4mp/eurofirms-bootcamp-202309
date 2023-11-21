function toggleLikePost(userId, postId) {
    validateEmail(userId, 'user id')
    validateNumber(postId, 'post id')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('User not found')

    const post = db.findPostById(postId)

    if (!post)
        throw new Error('Post not found')

    const index = post.likes.indexOf(userId)

    if (index < 0)
        post.likes.push(userId)
    else
        post.likes.splice(Index, 1)

    db.updatePost(post)
}