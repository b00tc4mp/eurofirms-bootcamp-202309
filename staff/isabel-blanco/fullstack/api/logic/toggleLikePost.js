const { User, Post } = require('../data/models')

const { validate } = require('./helpers')

const { NotFoundError, SystemError } = require('./errors')

function toggleLikePost(userId, postId, callback) {
    validate.text(userId, 'user id')
    validate.text(postId, 'post id')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

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
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}
module.exports = toggleLikePost