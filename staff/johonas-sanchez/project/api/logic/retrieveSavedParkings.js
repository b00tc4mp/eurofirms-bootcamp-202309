const { validate } = require('./helpers')
const { User, Parking } = require('../data/models')
const { NotFoundError, SystemError } = require('./errors')

function retrieveSavedParkings(userId, callback) {
    validate.id(userId, 'user id')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            user.saved // [ObjectId('asfasdf'), ObjectId('asfasdfasdfasd'), ...]

            Parking.find({ _id: { $in: user.saved } }).select('-__v').populate('locator', 'name').lean()
                .then(parkings => {
                    parkings.forEach(parking => {
                        parking.id = parking._id.toString()
                        delete parking._id

                        if (parking.locator._id) {
                            parking.locator.id = parking.locator._id.toString()
                            delete parking.locator._id
                        }

                        parking.saved = user.saved.some(parkingObjectId => parkingObjectId.toString() === parking.id)
                    })

                    callback(null, parkings)
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = retrieveSavedParkings