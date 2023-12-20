const validate = require('./helpers/validate')

const { User, Post } = require('../data/models')

function toggleSavePost(userId, postId, callback) {
    validate.text(userId, 'user id')
    validate.text(postId, 'post id')
    validate.function(callback, 'callback')

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

                    const index = user.saved.findIndex(postObjectId => postObjectId.toString() === postId)

                    if (index < 0)
                        user.saved.push(postId)
                    else
                        user.saved.splice(index, 1)

                    user.save()
                        .then(() => callback(null))
                        .catch(error => callback(error))
                })
        })
        .catch(error => callback(error))
}

module.exports = toggleSavePost