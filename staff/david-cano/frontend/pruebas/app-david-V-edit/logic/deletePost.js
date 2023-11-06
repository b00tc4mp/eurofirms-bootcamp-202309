function deletePost(postIndex, loggedInEmail) {
    validateNumber(postIndex, 'post index')

    if (postIndex < 0 || postIndex >= posts.length) {
        throw new Error ('Post index is out of range')

    }
    const post = posts[postIndex]
    
    if (post.author !== loggedInEmail) {
        throw new Error ('you can only delete your own posts')
    }

    posts.splice(postIndex, 1)
}