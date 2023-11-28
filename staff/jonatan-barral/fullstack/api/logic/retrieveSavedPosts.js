const { validateText, validateFunction } = require('./helpers/validators')

const { User } = require('../data/models')

function retrieveSavedPosts(userId, callback) {
    validateText(userId, 'userId')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }


            callback(null, savedPosts)
        })
        .catch(error => {
            callback(error)
        })
}

module.exports = retrieveSavedPosts