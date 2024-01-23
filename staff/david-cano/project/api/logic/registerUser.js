const bcrypt = require('bcryptjs')

const { validate } = require('./helpers')

const { User } = require('../data/models')

const { SystemError, DuplicityError } = require('./errors')

function registerUser(name, email, password, role, callback) {
    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.password(password, 'password')
    validate.text(role, 'role')
    validate.function(callback, 'callback')

    bcrypt.hash(password, 8)
    .then(hash => {
            User.create({ name, email, password: hash, role })
        .then(() => callback(null))
        .catch(error => {
            if (error.code === 11000) {
                callback(new DuplicityError('user already exists'))

                return
            }

            callback(new SystemError(error.message))
        })
})
.catch(error => callback(new SystemError(error.message)))
}

module.exports = registerUser 
