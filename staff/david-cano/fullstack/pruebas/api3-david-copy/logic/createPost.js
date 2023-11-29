const { validateText, validateFunction } = require('./helpers/validators')
const { User, Post } = require('../data/models')

function createPost(userId, image, imageDescription, text, callback) {
    validateText(userId, 'userId')
    validateText(image, 'image')
    validateText(imageDescription, 'imageDescription')
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