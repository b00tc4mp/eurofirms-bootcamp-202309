const bcrypt = require('bcryptjs')

const { validate } = require('./helpers')

const { User } = require('../data/models')
const { CredentialsError, SystemError } = require('./errors')

function authenticateUser(email, password, callback) {
    validate.email(email, 'email')
    validate.password(password, 'password')
    validate.function(callback, 'callback')

    User.findOne({ email })
        .then(user => {
            if (!user) {
                callback(new CredentialsError('wrong email'))

                return
            }

            bcrypt.compare(password, user.password)
                .then(match => match ? callback(null, user.id) : callback(new CredentialsError('wrong password')))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = authenticateUser