const { validate } = require("./helpers")
const { User, Review } = require("../data/models")
const { NotFoundError, ClearanceError, SystemError } = require("./errors")

function deleteReview(userId, reviewId) {
   validate.id(userId, "user id")
   validate.id(reviewId, "review id")

   return User.findById(userId)
      .catch((error) => {
         throw new SystemError(error.message)
      })
      .then((user) => {
         if (!user) throw new NotFoundError("user not found")

         return Review.findById(reviewId)
            .catch((error) => {
               throw new SystemError(error.message)
            })
            .then((review) => {
               if (!review) throw new NotFoundError("review not found")
               if (review.author.toString() !== userId) throw new ClearanceError("review does not belong to user")

               return Review.deleteOne({ _id: reviewId })
                  .catch((error) => {
                     throw new SystemError(error.message)
                  })
                  .then((result) => {
                     if (result.deletedCount === 0) throw new SystemError("review can not be deleted")

                     return { success: true }
                  })
            })
      })
}

module.exports = deleteReview
