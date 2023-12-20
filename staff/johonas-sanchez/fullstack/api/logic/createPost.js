const { validate } = require('./helpers')
const { User, Post } = require('../data/models')

function createPost(userId, image, imageDescription, text, callback) {
    validate.text(userId, 'user id')
    validate.textt(image, 'image')
    validate.text(imageDescription, 'image description')
    validate.text(text, 'text')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }

            Post.create({ author: userId, image, imageDescription, text })
                .then(() => callback(null))
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}

module.exports = createPost