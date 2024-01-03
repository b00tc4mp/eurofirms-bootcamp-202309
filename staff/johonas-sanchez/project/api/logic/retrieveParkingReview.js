const { validate } = require("./helpers")
const { User, Review } = require("../data/models")
const { NotFoundError, SystemError } = require("./errors")

function retrieveParkingReview(userId, reviewId, callback) {
   validate.id(userId, "user id")
   validate.id(reviewId, "review id")
   validate.function(callback, "callback")

   User.findById(userId)
      .then((user) => {
         if (!user) {
            callback(new NotFoundError("user not found"))

            return
         }

         Review.findById(reviewId)
            .then(review => {
               if (!review) {
                  callback(new NotFoundError("review not found"))

                  return
               }

               callback(null, review)
            })
            .catch((error) => callback(new SystemError(error.message)))
      })
      .catch((error) => callback(new SystemError(error.message)))
}

module.exports = retrieveParkingReview
