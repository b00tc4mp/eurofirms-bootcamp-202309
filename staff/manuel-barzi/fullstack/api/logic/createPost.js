const { validate } = require('./helpers')
const { User, Post } = require('../data/models')
const { NotFoundError, SystemError } = require('./errors')

function createPost(userId, image, imageDescription, text, callback) {
    validate.text(userId, 'user id')
    validate.text(image, 'image')
    validate.text(imageDescription, 'image description')
    validate.text(text, 'text')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            Post.create({ author: userId, image, imageDescription, text })
                .then(() => callback(null))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = createPost