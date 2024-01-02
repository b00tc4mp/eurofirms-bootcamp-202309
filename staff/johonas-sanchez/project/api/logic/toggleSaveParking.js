const { validate } = require("./helpers")
const { User, Parking } = require("../data/models")
const { NotFoundError, SystemError } = require("./errors")

function toggleSaveParking(userId, parkingId, callback) {
   validate.id(userId, "user id")
   validate.id(parkingId, "parking id")
   validate.function(callback, "callback")

   User.findById(userId)
      .then((user) => {
         if (!user) {
            callback(new NotFoundError("user not found"))

            return
         }

         Parking.findById(parkingId)
            .then(parking => {
               if (!parking) {
                  callback(new NotFoundError("parking not found"))

                  return
               }

               const index = user.saved.findIndex((parkingObjectId) => parkingObjectId.toString() === parkingId)

               if (index < 0) user.saved.push(parkingId)
               else user.saved.splice(index, 1)

               user
                  .save()
                  .then(() => callback(null))
                  .catch((error) => callback(new SystemError(error.message)))
            })
            .catch((error) => callback(new SystemError(error.message)))
      })
      .catch((error) => callback(new SystemError(error.message)))
}

module.exports = toggleSaveParking
