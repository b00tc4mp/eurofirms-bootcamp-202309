const { User, Post } = require('../../api 1/data/models')
const { validateText, validateFunction } = require('./helpers/validators')

function toggleLikePost(userId, postId, callback) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }
            Post.findById(postId)
                .then(post => {
                    if (!post) {
                        callback(new Error('post not found'))

                        return
                    }

                    const index = post.likes.findById(userObjectId => userObjectId.toString() === userId)

                    if (index < 0)
                        post.likes.push(userId)
                    else
                        post.likes.splice(index, 1)

                    post.save()
                        .then(() => callback(null))
                        .catch(error => callback(error))
                })
        })
        .catch(error => callback(error))
}
module.exports = toggleLikePost