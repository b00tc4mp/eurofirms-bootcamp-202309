function toggleLikePost(userId, postId) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')

    const user = db.findUserById(userId)

    if (user === null)
        throw new Error('User not found')

    const post = db.findPostById(postId)

    if (post === null)
        throw new Error('Post not found')

    const userIdIndex = post.likes.indexOf(userId)

    if (userIdIndex < 0)
        post.likes.push(userIdIndex)
    else
        post.likes.splice(userIdIndex, 1)

    db.updatePost(post)
}