const { validate } = require("./helpers")
const { User } = require("../data/models")
const { NotFoundError, SystemError } = require("./errors")

function retrieveUser(userId, callback) {
   validate.id(userId, "user id")
   validate.function(callback, "callback")

   User.findById(userId)
      .select("-password -__v")
      .lean()
      // User.findById(userId).lean() Con el select en negativo puedo eliminar las propiedades que me devuelve

      .then((user) => {
         if (!user) {
            callback(new NotFoundError("user not found"))

            return
         }
         callback(null, user)
      })
      .catch((error) => callback(new SystemError(error.message)))
}

module.exports = retrieveUser
