const { validate } = require("./helpers")
const { User, Parking } = require("../data/models")
const { NotFoundError, SystemError } = require("./errors")

function toggleSaveParking(userId, parkingId) {
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

               const index = user.saved.findIndex((parkingObjectId) => parkingObjectId.toString() === parkingId)

               if (index < 0) user.saved.push(parkingId)
               else user.saved.splice(index, 1)

               return user.save()
                  .catch((error) => {
                     throw new SystemError(error.message)
                  })
                  .then(() => null)
            })
      })
   
}

module.exports = toggleSaveParking
