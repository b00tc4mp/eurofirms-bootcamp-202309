const bcrypt = require('bcryptjs')

const { validate } = require('./helpers')

const { User } = require('../data/models')

const { SystemError, DuplicityError, NotFoundError, ClearanceError } = require('./errors')

function registerUser(userId, name, userName, password, role) {
    validate.id(userId, 'user id')
    validate.text(name, 'name')
    validate.text(userName, 'userName')
    validate.password(password, 'password')
    validate.role(role, 'role')

    return User.findById(userId)
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')

            }

            if (user.role !== 'Administrador' && user.role !== 'Secretaría') {
                throw new ClearanceError(`User with role ${user.role}$ has not permission to create Users`)

            }

            if (user.role === 'Secretaría' && (role === 'Secretaría' || role === 'Administrador')) {
                throw new ClearanceError(`User with role ${user.role}$ has not permission to create this type of user`)

            }
            return bcrypt.hash(password, 8)
                .then(hash => User.create({ name, userName, password: hash, role }))
                .then(() => { })
                .catch(error => {
                    if (error.code === 11000)
                        throw new DuplicityError('user already exists')

                    throw new SystemError(error.message)
                })
        })
}

module.exports = registerUser