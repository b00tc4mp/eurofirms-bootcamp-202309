function deletePost(userId, postId) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('user not found')

    const users = db.findPostById(postId)

    if (!post)
        throw new Error('Post not found')

    if (post.author !== userId)
        throw new Error('Post doest not belong to user')

    db.removePostById(postId)

}

