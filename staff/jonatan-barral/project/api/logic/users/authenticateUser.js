const bcrypt = require('bcryptjs')

const { validate } = require('../helpers')

const { User } = require('../../data/models')

const { NotFoundError, CredentialsError, SystemError } = require('../errors')

function authenticateUser(username, password) {
    validate.text(username, 'username')
    validate.password(password, 'password')

    return User.findOne({ username })
        .catch(error => { throw new SystemError(error.message) })

        .then(user => {
            if (!user) {
                throw new NotFoundError('User not found')
            }

            if (!user.active) {
                throw new ClearanceError('this user is not active')
            }

            return bcrypt.compare(password, user.password)
                .catch(error => { throw new SystemError(error.message) })

                .then(match => {
                    if (match) {
                        return { id: user.id, role: user.role }
                    } else {
                        throw new CredentialsError('Wrong credentials')
                    }
                })
        })
}

module.exports = authenticateUser