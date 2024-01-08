const { validate } = require("./helpers")
const { User } = require("../data/models")
const { NotFoundError, SystemError } = require("./errors")

function retrieveUser(userId) {
   validate.id(userId, "user id")

   return (
      User.findById(userId)
         .select("-password -__v")
         .lean()
         // User.findById(userId).lean() Con el select en negativo puedo eliminar las propiedades que me devuelve

         .then(user => {
            if (!user) throw new NotFoundError("user not found")

            user.id = user._id.toString()
            delete user._id

            return user
         })
         .catch((error) => {
            throw new SystemError(error.message)
         })
   )
}

module.exports = retrieveUser
