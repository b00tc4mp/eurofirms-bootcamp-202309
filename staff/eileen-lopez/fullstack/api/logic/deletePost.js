const { validateText, validateFunction } = require('./helpers/validators')
const { User, Post } = require('../data/models')
function deletePost(userId, postId, callback) {
    validateText(userId, 'userId')
    validateText(postId, 'postId')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if(!user) {
                callback(new Error ('user not found'))
                return
            }
            Post.findById(postId)
                .then(post => {
                    if (!post) {
                        callback(new Error('post not found'))
                        return
                    }
                    if (post.author.toString() !== userId) {
                        callback(new Error ('post does not belong to user'))
                        return
                    }
                    Post.deleteOne({_id: postId })
                        .then(() => callback(null))
                        .catch(error => callback(error))
                })
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}
module.exports = deletePost