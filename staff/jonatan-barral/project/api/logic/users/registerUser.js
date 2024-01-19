const bcrypt = require('bcryptjs')

const { validate } = require('../helpers')

const { User } = require('../../data/models')

const { SystemError, DuplicityError, NotFoundError, ClearanceError } = require('../errors')

function registerUser(userId, creator, name, username, password, role) {
    validate.id(userId, 'user id')
    validate.text(name, 'name')
    validate.text(username, 'username')
    validate.password(password, 'password')
    validate.role(role, 'role')

    return User.findById(userId)
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')

            }

            if (user.role !== 'administrador') {
                throw new ClearanceError(`User with role ${user.role}$ has not permission to create Users`)

            }

            return bcrypt.hash(password, 8)
                .then(hash => User.create({ creator, userId, name, username, password: hash, role }))
                .then(() => { })
                .catch(error => {
                    if (error.code === 11000)
                        throw new DuplicityError('user already exists')

                    throw new SystemError(error.message)
                })
        })

}

module.exports = registerUser