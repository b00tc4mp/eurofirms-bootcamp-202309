const { validateText, validateFunction } = require('./helpers/validators')

const { User } = require('../data/models')

function retrieveUser(userId, callback) {
    validateText(userId, 'userId')
    validateFunction(callback, 'callback')

    User.findById(userId).select('-password -__v').lean()
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }
            user.id = user._id.toString()

            delete user._id

            callback(null, user)
        })
        .catch(error => {
            callback(error)
        })
}

module.exports = retrieveUser






