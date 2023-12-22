const { validate } = require('./helpers')
const { User } = require('../data/models')
const { NotFoundError, SystemError } = require('./errors')

function retrieveSavedPosts(userId, callback) {
    validate.id(userId, 'user id')
    validate.function(callback, 'callback')

    User.findById(userId).populate({ path: 'saved', populate: { path: 'author', select: 'name' } }).lean()
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

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
        .catch(error => callback(new SystemError(error.message)))
}
module.exports = retrieveSavedPosts