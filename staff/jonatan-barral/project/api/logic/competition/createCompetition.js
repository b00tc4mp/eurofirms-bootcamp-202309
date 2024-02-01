const { validate } = require('../helpers')

const { User, Competition } = require('../../data/models')

const { SystemError, NotFoundError, ClearanceError } = require('../errors')

function createCompetition(userId, startdate, enddate, location) {
    validate.id(userId, 'user id')
    validate.date(startdate, 'startdate')
    validate.date(enddate, 'enddate')
    validate.text(location, 'location')

    return User.findById(userId)
        .catch((error) => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) {
                throw new NotFoundError('user not found')

            }

            if (user.status !== 'activated') {
                throw new ClearanceError(`User has not permission to create Competitions`)
            }

            if (user.role !== 'secretaria') {
                throw new ClearanceError(`User with role ${user.role}$ has not permission to create Competitions`)

            }

            return Competition.create({ startdate: new Date(startdate), enddate: new Date(enddate), organizer: userId, location })
        })

}


module.exports = createCompetition