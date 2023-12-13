const { validateText, validateFunction } = require('./helpers/validators')

const { User, Post } = require('../data/models')

function retrievePosts(userId, callback) {
    validateText(userId, 'User Id')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new Error('User not found'))

                return
            }

            Post.find().select('-__v').populate('author', 'name').lean()
                .then(posts => {
                    posts.forEach(post => {
                        post.id = post._id.toString()
                        delete post._id

                        if (post.author._id) {
                            post.author.id = post.author._id.toString()
                            delete post.author._id
                        }
                    })

                    callback(null, posts.reverse())
                })
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}
module.exports = retrievePosts