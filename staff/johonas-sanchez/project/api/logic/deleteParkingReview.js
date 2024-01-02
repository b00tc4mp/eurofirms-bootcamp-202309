const { validate } = require("./helpers")
const { User, Review, Parking } = require("../data/models")
const { NotFoundError, ClearanceError, SystemError } = require("./errors")

function deleteParkingReview(userId, reviewId, callback) {
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
            .then((review) => {
               if (!review) {
                  callback(new NotFoundError("review not found"))

                  return
               }

               if (review.author.toString() !== userId) {
                  callback(new ClearanceError("review does not belong to user"))

                  return
               }

               Review.deleteOne({ _id: reviewId })
                  .then((result) => {
                     if (result.deletedCount === 0) {
                        callback(new SystemError("review can not be deleted"))

                        return
                     }

                     Parking.findOne({ reviews: reviewId })
                     .then(parking => {
                        
                        if (!parking) {
                            callback(new NotFoundError('parking not found'))

                            return
                        }
                        const index = parking.reviews.findIndex(review => reviewId === review.toString() )
                        
                        if (index > -1) {
                            parking.reviews.splice(index,1)
                            
                        }
                        parking.save()
                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))

                     })
                     .catch(error => callback(new SystemError(error.message)))
                  })
                  .catch(error => callback(new SystemError(error.message)))
            })
            .catch(error => callback(new SystemError(error.message)))
      })
      .catch(error => callback(new SystemError(error.message)))
}

module.exports = deleteParkingReview
