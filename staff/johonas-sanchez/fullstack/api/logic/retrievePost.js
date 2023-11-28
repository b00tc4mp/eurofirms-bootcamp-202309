const { validateText, validateFunction } = require('./helpers/validators')

const { User, Post } = require('../data/models')

function retrievePost(userId, postId, callback) {
    validateText(userId, 'userId')
    validateText(postId, 'postId')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }

            Post.findById(postId).select('-__v').populate('author', 'name').lean()
                .then(post => {
                    if (!post) {
                        callback(new Error('post not found'))

                        return
                    }

                    post.id = post._id.toString()
                    delete post._id

                    post.author.id = post.author._id.toString()
                    delete post.author._id

                    const postLikesString = post.likes.map(like => like.toString())
                    post.likes = postLikesString
                    
                    callback(null, post)

                })

                .catch(error => callback(error))
        })
        .catch(error => callback(error))
    }

module.exports = retrievePost