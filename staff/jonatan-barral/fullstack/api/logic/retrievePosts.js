const { validateText, validateFunction } = require('./helpers/validators')

const { User, Post } = require('../data/models')

function retrievePosts(userId, callback) {
    validateText(userId, 'userId')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new Error('User not found'))

                return
            }

            Post.find().lean()
                .then(posts => {
                    // TO DO sanitize

                    callback(null, posts)
                })
        })
        .catch(error => console.error(error))
}
module.exports = retrievePosts