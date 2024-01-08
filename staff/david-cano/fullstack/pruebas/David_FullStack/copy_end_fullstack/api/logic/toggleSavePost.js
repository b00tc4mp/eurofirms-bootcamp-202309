const { validate } = require('./helpers')

const { User, Post } = require('../data/models')
const { NotFoundError, SystemError } = require('./errors')

function toggleSavePost(userId, postId, callback) {
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
                        callback(new NotFoundError('post not found'))

                        return
                    }

                    const index = user.saved.findIndex(postObjectId => postObjectId.toString() === postId)

                    if (index < 0)
                        user.saved.push(postId)
                    else
                        user.saved.splice(index, 1)

                        user.save()
                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))
                })
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = toggleSavePost