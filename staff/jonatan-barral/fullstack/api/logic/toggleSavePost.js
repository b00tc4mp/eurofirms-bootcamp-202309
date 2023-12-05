const { validateText, validateFunction } = require('./helpers/validators')

const { User, Post } = require('../data/models')

function toggleSavePost(userId, postId, callback) {
    validateText(userId, 'user Id')
    validateText(postId, 'Post Id')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new Error('User not found'))

                return
            }

            if (!postId) {
                callback(new Error('Post not found'))

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
        .catch(error => callback(error))
}

module.exports = toggleSavePost