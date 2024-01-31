const { validate } = require("./helpers")
const { User, Parking } = require("../data/models")
const { NotFoundError, SystemError } = require("./errors")

function retrieveParking(userId, parkingId) {
   validate.id(userId, "user id")
   validate.id(parkingId, "parking id")

   return User.findById(userId)
      .catch((error) => {
         throw new SystemError(error.message)
      })
      .then((user) => {
         if (!user) throw new NotFoundError("user not found")

         return Parking.findById(parkingId)
            .select("-__v")
            .then((parking) => {
               if (!parking) throw new NotFoundError("parking not found")

               return parking
            })
            .catch((error) => {
               throw new SystemError(error.message)
            })
      })
}

module.exports = retrieveParking
