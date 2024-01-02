const { validate } = require('./helpers')
const { User, Review, Parking } = require('../data/models')
const { NotFoundError, SystemError } = require('./errors')

function createParkingReview(userId, parkingId, comment, valuation, callback) {
    validate.id(userId, 'user id')
    validate.id(parkingId, 'parking id')
    validate.text(comment, 'comment')
    validate.number(valuation, 'valuation')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            Parking.findById(parkingId)
                .then(parking => {
                    if (!parking) {
                        callback(new NotFoundError('parking not found'))

                        return
                    }

                    // Crear la revisión y agregar su ID al array de revisiones en Parking
                    Review.create({ author: userId, comment, valuation })
                        .then(review => {
                            parking.reviews.push(review._id) // Agregar el ID de la revisión al array
                            return parking.save() // Guardar el parking actualizado
                        })
                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = createParkingReview