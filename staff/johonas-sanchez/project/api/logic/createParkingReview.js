const { validate } = require("./helpers")
const { User, Review, Parking } = require("../data/models")
const { NotFoundError, SystemError, DuplicityError } = require("./errors")

function createParkingReview(userId, parkingId, comment, valuation) {
   validate.id(userId, "user id")
   validate.id(parkingId, "parking id")
   validate.text(comment, "comment")
   validate.range(valuation, 1, 5, "valuation")

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

               return Review.findOne({ author: userId, parking: parkingId })
                  .catch((error) => {
                     throw new SystemError(error.message)
                  })
                  .then((review) => {

                     if (review) {
                        throw new DuplicityError("Review already exists for this user and parking")
                     }

                     // Crear la revisión si no existe review de ese usuario para ese parking
                     return Review.create({ author: userId, parking: parkingId, comment, valuation })
                        .catch((error) => {
                           throw new SystemError(error.message)
                        })
                        .then(() => null)
                  })
            })
      })
}

module.exports = createParkingReview
