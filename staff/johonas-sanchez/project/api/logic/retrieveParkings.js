const { validate } = require("./helpers")
const { User, Parking } = require("../data/models")
const { NotFoundError, SystemError } = require("./errors")

function retrieveParkings(userId) {
   validate.id(userId, "user id")

   return User.findById(userId)
      .catch((error) => {
         throw new SystemError(error.message)
      })
      .then((user) => {
         if (!user) throw new NotFoundError("user not found")

         return Parking.find()
            .select("-__v")
            .populate("locator", "name")
            .lean()
            .then((parkings) => {
               parkings.forEach((parking) => {
                  parking.id = parking._id.toString()
                  delete parking._id

                  if (parking.locator._id) {
                     parking.locator.id = parking.locator._id.toString()
                     delete parking.locator._id
                  }

                  if (parking.location._id) {
                    parking.location.id = parking.location._id.toString()
                    delete parking.location._id
                 }

                  parking.saved = user.saved.some((parkingObjectId) => parkingObjectId.toString() === parking.id)
               })

               return parkings
            })
            .catch((error) => {
                throw new SystemError(error.message)
             })
      }) 
}

module.exports = retrieveParkings
