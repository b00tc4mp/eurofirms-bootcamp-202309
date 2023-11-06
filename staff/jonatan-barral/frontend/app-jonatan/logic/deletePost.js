function deletePost(loggedInEmail, postId, posts) {
    validateText(postId, 'post id')
    validateEmail(loggedInEmail)

    let postIndex = posts.findIndex(function (post) {
        return post.id === postId
    })

    if (postIndex === -1) {
        throw new Error('Cannot find post with id ' + postId)
    }

    let post = posts[postIndex]

    if (post.author !== loggedInEmail) {
        throw new Error('You are not authorized to delete this post')
    }

    posts.splice(postIndex, 1);
}