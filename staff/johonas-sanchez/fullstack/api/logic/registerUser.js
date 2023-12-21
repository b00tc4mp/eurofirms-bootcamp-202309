const bcrypt = require('bcryptjs')
const { validate } = require('./helpers')
const { User } = require('../data/models')

function registerUser(name, email, password, callback) {
    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.password(password, 'password')
    validate.function(callback, 'callback')

    bcrypt.hash(password, 8)
        .then(hash => {
            User.create({ name, email, password: hash })
                .then(() => callback(null))
                .catch(error => {
                    if (error.code === 11000) {
                        callback(new Error('user already exists'))

                        return
                    }

                    callback(error)
                })
        })
        .catch(error => callback(error))
}

module.exports = registerUser