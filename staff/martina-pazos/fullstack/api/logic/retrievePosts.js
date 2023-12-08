const { validateText, validateFunction } = require('./helpers/helpers/validators')

const { User, Post } = require('../data/models')

function retrievePosts(userId, callback) {
    validateText(userId, 'userId')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }
            Post.find().select('-__v').populate('author', 'name').lean()
                .then(post => {
                    posts.forEach(post => {
                        post.id = post._id.toString()
                        delete post._id

                        if (post.author._id) {
                            post.author.id = post.author._id.toString()
                            delete post.author._id
                        }
                    })
                    callback(null, posts)
                })
        })
        .catch(error => console.error(error))
}
module.exports = retrievePosts


