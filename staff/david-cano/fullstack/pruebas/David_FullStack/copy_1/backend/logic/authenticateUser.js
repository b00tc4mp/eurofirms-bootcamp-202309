const { validateEmail, validatePassword, validateFunction } = require('./helpers/validators')

const { User } = require('../data/models')

function authenticateUser(email, password, callback) {
    validateEmail(email, 'email')
    validatePassword(password, 'password')
    validateFunction(callback, 'callback')

    User.findOne({ email, password })
        .then(user => {
            if (!user) {
                callback(new Error('wrong credentials'))

                return
            }

            callback(null, user.id)
        })
        .catch(error => callback(error))
}

module.exports = authenticateUser