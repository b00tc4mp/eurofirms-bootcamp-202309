function retrievePosts(email) {
    validateEmail(email)

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('User not found')

    const posts = db.getPosts()

    posts.forEach(function (post) {
        const user = db.findUserById(post.author)

        post.author = user.name

        post.liked = post.likes.includes(userId)
    })

    return posts
}