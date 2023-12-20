const validate = require('./helpers/validate')

const { User, Post } = require('../data/models')

function retrieveSavedPosts(userId, callback) {
    validate.text(userId, 'user id')
    validate.function(callback, 'callback')

    User.findById(userId).populate({ path: 'saved', populate: { path: 'author', select: 'name' } }).lean()
        .then(user => {
            if (!user) {
                callback(new Error('User not found'))

                return
            }

            const posts = user.saved

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
        .catch(error => callback(error))
}
module.exports = retrieveSavedPosts