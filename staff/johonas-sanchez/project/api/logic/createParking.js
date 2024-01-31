const { validate } = require("./helpers")
const { User, Parking, Point } = require("../data/models")
const { NotFoundError, SystemError } = require("./errors")

function createParking(userId, lat, long) {
   validate.id(userId, "user id")
   validate.number(lat, "latitud")
   validate.number(long, "longitud")

   return User.findById(userId)
      .catch((error) => {
         throw new SystemError(error.message)
      })
      .then((user) => {
         if (!user) throw new NotFoundError("user not found")

         const point = new Point({ coordinates: [ long, lat ] })

         return Parking.create({ locator: userId, location: point })
            .catch((error) => {
               throw new SystemError(error.message)
            })
            .then(() => null)
      })
}

module.exports = createParking
