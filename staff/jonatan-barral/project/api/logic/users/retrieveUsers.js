const { validate } = require('../helpers')

const { User } = require('../../data/models')

const { NotFoundError, SystemError, ClearanceError } = require('../errors')

function retrieveUsers(userId) {
    validate.id(userId, 'user id')

    return User.findById(userId)
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')
            }

            if (user.role !== 'administrador') {
                throw new ClearanceError(`User with role ${user.role} has not permission to view Users`)
            }

            return User.find().select('-__v').lean()
        })
        .then(users => {
            users.forEach(user => {
                user.id = user._id.toString()
                delete user._id
            })

            return users
        })
}

module.exports = retrieveUsers