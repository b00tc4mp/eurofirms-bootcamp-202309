function retrievePosts(userId) {
    validateText(userId, 'user id')

    const user = db.findUserById(userId)

    if (user === null)
        throw new Error('User not found')

    const posts = db.getPosts()

    posts.forEach(function (post) {
        const userId = post.author

        const user = db.findUserById(userId)

        post.author = user.name
    })

    return posts
}