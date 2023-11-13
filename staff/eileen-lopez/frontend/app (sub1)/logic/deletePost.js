function deletePost(userId, postId) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')

    const user = db.findUserById(userId)

    if (!user)

        throw new Error ('User not found')

    const post = db.findPostById(postId)

    if(!post)
        throw new Error ('Post not found')

    if(post.author !== userId)
        throw new Error ('Post does not belong to user')

    const users = db.getUsers()

    users.forEach(function (user) {
        const index = user.saved.indexOf(post.id)

        if (index > -1) {
            user.saved.splice(index, 1)

            db.updateUser (user)
        }
    })

    db.removePostById(postId)
}