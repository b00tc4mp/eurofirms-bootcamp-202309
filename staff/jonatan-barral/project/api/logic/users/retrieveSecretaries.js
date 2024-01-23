const { validate } = require('../helpers')

const { User } = require('../../data/models')

const { NotFoundError, SystemError, ClearanceError } = require('../errors')

function retrieveSecretaries(userId) {
    validate.id(userId, 'user id')

    return User.findById(userId)
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')
            }

            if (user.role !== 'administrador') {
                throw new ClearanceError(`User with role ${user.role} has not permission to view users`)
            }

            return User.find({ role: 'secretaria' }).select('-__v').lean()
                .then(users => {
                    users.forEach(user => {
                        user.id = user._id.toString()
                        delete user._id
                    })

                    return users
                })
                .catch(error => {
                    throw new SystemError(error.message)
                })
        })
        .catch(error => {
            throw new SystemError(error.message)
        })
}



module.exports = retrieveSecretaries