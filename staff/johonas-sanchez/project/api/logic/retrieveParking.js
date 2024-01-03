const { validate } = require("./helpers")
const { User, Parking } = require("../data/models")
const { NotFoundError, SystemError } = require("./errors")

function retrieveParking(userId, parkingId, callback) {
   validate.id(userId, "user id")
   validate.id(parkingId, "parking id")
   validate.function(callback, "callback")

   User.findById(userId)
      .then((user) => {
         if (!user) {
            callback(new NotFoundError("user not found"))

            return
         }

         Parking.findById(parkingId).select('-__v')
            .then(parking => {
               if (!parking) {
                  callback(new NotFoundError("parking not found"))

                  return
               }

               callback(null, parking)
            })
            .catch((error) => callback(new SystemError(error.message)))
      })
      .catch((error) => callback(new SystemError(error.message)))
}

module.exports = retrieveParking
