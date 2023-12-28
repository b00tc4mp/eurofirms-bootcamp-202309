const bcrypt = require('bcryptjs')

const { validate } = require('./helpers')

const { User } = require ('../data/models')
const { NotFoundError, CredentialsError, SystemError } = require('./errors')

function authenticateUser(email, password, callback) {
    validateEmail(email, 'email')
    validatePassword(password, 'password')
    validateFunction(callback, 'callback')

    User.findOne({ email, password })
        .then(user => {
            if (!user) {
                callback(new NotFoundError('wrong credentials'))

                return
            }
            bcrypt.compare(password, user.password)
                .then(match => match ? callback(null, user.id) : callback(new CredentialsError('wrong credentials')))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}
module.exports = authenticateUser