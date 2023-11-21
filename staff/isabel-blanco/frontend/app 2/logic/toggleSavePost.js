function toggleSavePost(userId, postId) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('user not found')

    const post = db.findPostById(postId)

    if (!post)
        throw new Error('post not found')

    const index = user.saved.indexOf(postId)

    if (index < 0)
        user.saved.push(postId)
    else
        user.saved.splice(index, 1)

    db.updateUser(user)
}