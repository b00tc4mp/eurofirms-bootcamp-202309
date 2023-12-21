const bcrypt = require('bcryptjs')

const { validate } = require('./helpers')

const { User } = require('../data/models')

function authenticateUser(email, password, callback) {
    validate.text(email, 'email')
    validate.password(password, 'password')
    validate.function(callback, 'callback')

    User.findOne({ email })
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }

            bcrypt.compare(password, user.password)
                .then(match => match ? callback(null, user.id) : callback(new Error('wrong credentials')))
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}

module.exports = authenticateUser