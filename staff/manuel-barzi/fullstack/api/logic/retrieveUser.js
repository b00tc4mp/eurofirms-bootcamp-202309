const { validate } = require('./helpers')

const { User } = require('../data/models')
const { NotFoundError, SystemError } = require('./errors')

function retrieveUser(userId) {
    validate.id(userId, 'user id')

    return User.findById(userId).select('-_id -email -password -saved -__v').lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found')

            return user
        })
}

module.exports = retrieveUser