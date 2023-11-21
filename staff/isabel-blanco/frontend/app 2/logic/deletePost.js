function deletePost(userId, postId) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('user not found')

    const post = db.findPostById(postId)

    if (!post)
        throw new Error('post not found')

    if (post.author !== userId)
        throw new Error('post doesnt belong to user')

    db.removePostById(postId)
}