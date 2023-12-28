const { validateText, validateFunction } = require('./helpers/validate')
const { User, Post } = require('../data/models')

function createPost(userId, image, imageDescription, text, callback) {
    validateText(userId, 'user id')
    validateText(image, 'image')
    validateText(imageDescription, 'image description')
    validateText(text, 'text')
    validateFunction(callback, 'callback')

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