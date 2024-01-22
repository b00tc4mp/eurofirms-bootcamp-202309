const { validate } = require("./helpers")
const { User, Review } = require("../data/models")
const { NotFoundError, SystemError } = require("./errors")

function retrieveReviews(userId, parkingId) {
   validate.id(userId, "user id")
   validate.id(parkingId, "parking id")

   return User.findById(userId)
      .catch((error) => {
         throw new SystemError(error.message)
      })
      .then((user) => {
         if (!user) throw new NotFoundError("user not found")

         return Review.find({ parking: parkingId })
            .select("-__v")
            .then((reviews) => {
               return reviews
            })
            .catch((error) => {
               throw new SystemError(error.message)
            })
      })
}

module.exports = retrieveReviews
