const { validateText, validateFunction } = require('./helpers/validators')

const { User, Post } = require('../data/models')

function toggleLikePost(userId, postId, callback) {
    validateText(userId, 'userId')
    validateText(postId, 'postId')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new Error('User not found'))

                return
            }

            Post.findById(postId)
                .then(post => {
                    if (!postId) {
                        callback(new Error('Post not found'))

                        return
                    }

                    const index = post.likes.findIndex(postObjectId => postObjectId.toString() === userId)

                    if (index < 0)
                        post.likes.push(userId)
                    else
                        post.likes.splice(index, 1)

                    post.save()

                        .then(() => callback(null))
                        .catch(error => callback(error))
                })
                .catch(error => callback(error))
        })
}
module.exports = toggleLikePost