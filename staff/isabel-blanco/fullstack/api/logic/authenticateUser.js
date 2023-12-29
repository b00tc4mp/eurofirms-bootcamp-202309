const bcrypt = require('bcryptjs')

const { validate } = require('./helpers')

const { User } = require('../data/models')

const { CredentialsError, SystemError } = require('./errors')

function authenticateUser(email, password, callback) {
    validate.email(email, 'email')
    validate.password(password, 'password')
    validate.function(callback, 'callback')

    User.findOne({ email, password })
        .then(user => {
            if (!user) {
                callback(new CredentialsError('user not found'))

                return
            }

            bcrypt.compare(password, user.password)
                .then(math => math ? callback(null, user.id) : callback(new CredentialsError('wrong credentials')))
                .catch(error => callback(new SystemError(error.message)))

        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = authenticateUser