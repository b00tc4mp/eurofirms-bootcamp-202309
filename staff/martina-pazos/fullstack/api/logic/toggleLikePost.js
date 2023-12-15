const { validateText, validateFunction } = require('./helpers/validators')

const { User, Post } = require('../data/models')

function toggleLikePost(userId, postId, callback) {
    validateText(userId, 'userId')
    validateText(postId, 'postId')
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

                    const index = post.likes.findIndex(userObjectId => userObjectId.toString() === userid)

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


