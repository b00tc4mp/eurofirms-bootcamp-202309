const { validateText, validateFunction } = require('./helpers/validate')
const { User, Post } = require('../data/models')

function deletePost(userId, postId, callback) {
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

                    if (post.author.toString() !== userId) {
                        callback(new Error('post does not belong to user'))

                        return
                    }

                    Post.deleteOne({ _id: postId })
                        .then(result => {
                            if (result.deletedCount === 0) {
                                callback(new Error('post can not be deleted'))

                                return
                            }

                            callback(null)
                        })
                        .catch(error => callback(error))
                })
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}

module.exports = deletePost