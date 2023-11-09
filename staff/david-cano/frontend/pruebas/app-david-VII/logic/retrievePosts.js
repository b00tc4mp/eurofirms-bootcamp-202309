function retrievePosts(userId) {
    validateText(userId, 'user id')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('User not found')

    const posts = db.getPosts()

    posts.forEach(function (post) {
        const author = db.findUserById(post.author)

        post.author = {
            id: author.id,
            name: author.name
        }

        post.liked = post.likes.includes(userId)

        post.saved = user.saved.includes(post.id)
    })

    return posts
}