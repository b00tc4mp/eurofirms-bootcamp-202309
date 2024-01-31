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
            .select("-__v -parking")
            .populate("author", "name")
            .lean() // Añadidos .lean() para obtener un objeto plano
            .then((reviews) => {
               reviews.forEach((review) => {
                  review.id = review._id.toString()
                  delete review._id

                  if (review.author._id) {
                     review.author.id = review.author._id.toString()
                     delete review.author._id
                  }
               })
               return reviews
            })

            .catch((error) => {
               throw new SystemError(error.message)
            })
      })
}

module.exports = retrieveReviews
