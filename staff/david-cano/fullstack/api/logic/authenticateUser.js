const { validate } = require('./helpers')

const { User } = require('../data/models')

function authenticateUser(email, password, callback) {
    validate.email(email, 'email')
    validate.password(password, 'password')
    validate.function(callback, 'callback')

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