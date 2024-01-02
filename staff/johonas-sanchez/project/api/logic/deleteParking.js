const { validate } = require('./helpers')
const { User, Parking } = require('../data/models')
const { NotFoundError, ClearanceError, SystemError } = require('./errors')

function deleteParking(userId, parkingId, callback) {
    validate.id(userId, 'user id')
    validate.id(parkingId, 'parking id')
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

                    if (parking.locator.toString() !== userId) {
                        callback(new ClearanceError('parking does not belong to user'))

                        return
                    }

                    if (parking.confirm.length > 0) {
                        callback(new ClearanceError('you can not delete a confirmed parking space'))

                        return
                    }

                    Parking.deleteOne({ _id: parkingId })
                        .then(result => {
                            if(result.deletedCount === 0) {
                                callback(new SystemError('parking can not be deleted'))

                                return
                            }
                            
                            callback(null)
                        })
                        .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = deleteParking