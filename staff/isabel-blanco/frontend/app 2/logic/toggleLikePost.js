function toggleLikePost(userId, postId) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('user not found')

    const post = db.findPostById(postId)

    if (!post)
        throw new Error('post not found')

    const index = post.likes.indexOf(userId)

    if (index < 0)
        post.likes.push(userId)
    else
        post.likes.splice(index, 1)

    db.updatePost(post)
}