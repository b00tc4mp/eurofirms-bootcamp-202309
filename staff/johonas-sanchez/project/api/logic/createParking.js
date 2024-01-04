const { validate } = require('./helpers')
const { User, Parking, Point } = require('../data/models')
const { NotFoundError, SystemError } = require('./errors')

function createParking(userId, lat, long, callback) {
    validate.id(userId, 'user id')
    validate.number(lat, 'latitud')
    validate.number(long, 'longitud')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            const point = new Point({coordinates: [long, lat]})

            Parking.create({ locator: userId, location: point })
                .then(() => callback(null))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = createParking