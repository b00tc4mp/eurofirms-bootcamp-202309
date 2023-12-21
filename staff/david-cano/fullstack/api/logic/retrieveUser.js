const { validate } = require('./helpers')

const { User } = require('../data/models')

function retrieveUser(userId, callback) {
    validate.text(userId, 'user id')
    validate.function(callback, 'callback')

    User.findById(userId).select('-_id -email -password -saved -__v').lean()
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }

            callback(null, user)
        })
        .catch(error => {
            callback(error)
        })
}

module.exports = retrieveUser