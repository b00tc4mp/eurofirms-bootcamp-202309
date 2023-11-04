function deletePost(postIndex, loggedInEmail, posts) {
    validateNumber(postIndex, 'post index')

    if (postIndex < 0 || postIndex >= posts.length) {
        throw new Error ('Post index is out of range')

    }
    const post = posts[postIndex]
    if (post.author === loggedInEmail) {
        posts.splice(postIndex, 1)
    }else{
        throw new Error ('you can only delete your own posts')
    }


}