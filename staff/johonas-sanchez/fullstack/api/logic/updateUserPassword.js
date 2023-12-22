const bcrypt = require("bcryptjs")
const { validate } = require("./helpers")
const { User } = require("../data/models")
const { ContentError, CredentialsError, NotFoundError, SystemError } = require("./errors")

function updateUserPassword(userId, password, newPassword, repeatNewPassword, callback) {
   validate.id(userId, "user id")
   validate.password(password, "password")
   validate.password(newPassword, "new password")
   validate.password(repeatNewPassword, "repeat new password")
   validate.function(callback, "callback")

   if (newPassword !== repeatNewPassword) throw new ContentError("new password does not match repeat new password")

   User.findById(userId)
      .then((user) => {
         if (!user) {
            callback(new NotFoundError("user not found"))

            return
         }

         bcrypt.compare(password, user.password)
         .then((match) => {
            if (!match) {
               callback(new CredentialsError("wrong credentials"))

               return
            }

            bcrypt
               .hash(newPassword, 8)
               .then((hash) => {
                  user.password = hash

                  user
                     .save()
                     .then(() => callback(null))
                     .catch((error) => callback(new SystemError(error.message)))
               })
               .catch((error) => callback(new SystemError(error.message)))
         })
         .catch((error) => callback(new SystemError(error.message)))
      })
      .catch((error) => callback(new SystemError(error.message)))
}

module.exports = updateUserPassword
