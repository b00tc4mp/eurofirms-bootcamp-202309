const { validate } = require("./helpers")
const { User, Review } = require("../data/models")
const { NotFoundError, SystemError } = require("./errors")

function retrieveReview(userId, reviewId) {
   validate.id(userId, "user id")
   validate.id(reviewId, "review id")

   return User.findById(userId)
      .catch((error) => {
         throw new SystemError(error.message)
      })
      .then((user) => {
         if (!user) throw new NotFoundError("user not found")

         return Review.findById(reviewId)
            .select("-__v")
            .then((review) => {
               if (!review) if (!review) throw new NotFoundError("review not found")

               return review
            })
            .catch((error) => {
               throw new SystemError(error.message)
            })
      })
}

module.exports = retrieveReview
