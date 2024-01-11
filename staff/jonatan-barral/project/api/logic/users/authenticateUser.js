const bcrypt = require('bcryptjs')

const { validate } = require('../helpers')

const { User } = require('../../data/models')

const { NotFoundError, CredentialsError, SystemError } = require('../errors')

function authenticateUser(username, password) {
    validate.text(username, 'username')
    validate.password(password, 'password')

    return User.findOne({ username })
        .then(user => {
            if (!user) {
                throw new NotFoundError('User not found')
            }

            if (!user.active) {
                throw new ClearanceError('this user is not active')
            }

            return bcrypt.compare(password, user.password)
                .then(match => {
                    if (match) {
                        return user.id
                    } else {
                        throw new CredentialsError('Wrong credentials')
                    }
                })
                .catch(error => { throw new SystemError(error.message) })
        })
        .catch(error => { throw new SystemError(error.message) })
}

module.exports = authenticateUser