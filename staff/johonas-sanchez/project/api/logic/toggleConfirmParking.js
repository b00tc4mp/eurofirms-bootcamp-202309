const { validate } = require("./helpers")
const { User, Parking } = require("../data/models")
const { NotFoundError, SystemError } = require("./errors")

function toggleConfirmParking(userId, parkingId) {
   validate.id(userId, "user id")
   validate.id(parkingId, "parking id")

   return User.findById(userId)
      .catch((error) => {
         throw new SystemError(error.message)
      })
      .then((user) => {
         if (!user) throw new NotFoundError("user not found")

         return Parking.findById(parkingId)
            .catch((error) => {
               throw new SystemError(error.message)
            })
            .then((parking) => {
               if (!parking) throw new NotFoundError("parking not found")

               const index = parking.confirmations.findIndex((userObjectId) => userObjectId.toString() === userId)

               if (index < 0) parking.confirmations.push(userId)
               else parking.confirmations.splice(index, 1)

               parking
                  .save()
                  .catch((error) => {
                     throw new SystemError(error.message)
                  })
                  .then(() => null)
            })
      })
}
module.exports = toggleConfirmParking
