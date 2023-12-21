const { validate } = require('./helpers')

const { User } = require('../data/models')

function registerUser(name, email, password, callback) {
    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.password(password, 'password')
    validate.function(callback, 'callback')

    User.create({ name, email, password })
        .then(() => callback(null))
        .catch(error => {
            if (error.code === 11000) {
                callback(new Error('user already exists'))

                return
            }

            callback(error)
        })
}

module.exports = registerUser