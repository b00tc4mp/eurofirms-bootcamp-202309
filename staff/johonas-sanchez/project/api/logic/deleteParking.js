const { validate } = require("./helpers")
const { User, Parking } = require("../data/models")
const { NotFoundError, ClearanceError, SystemError } = require("./errors")

function deleteParking(userId, parkingId) {
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

               if (parking.locator.toString() !== userId) throw new ClearanceError("parking does not belong to user")

               if (parking.confirmations.length > 0) throw new ClearanceError("you can not delete a confirmed parking space")

               return Parking.deleteOne({ _id: parkingId })
                  .catch((error) => {
                     throw new SystemError(error.message)
                  })
                  .then((result) => {
                     if (result.deletedCount === 0) throw new SystemError("parking can not be deleted")

                     return { success: true }
                  })
            })
      })
}

module.exports = deleteParking
