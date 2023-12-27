const { validate } = require("./helpers")
const { User } = require("../data/models")
const { ContentError, CredentialsError, NotFoundError, SystemError } = require("./errors")

function updateUserEmail(userId, password, email, newEmail, repeatNewEmail, callback) {
   validate.id(userId, "user id")
   validate.password(password, "password")
   validate.email(email, "email")
   validate.email(newEmail, "new email")
   validate.email(repeatNewEmail, "repeat new email")
   validate.function(callback, "callback")

   if (newEmail !== repeatNewEmail) throw new ContentError("new email does not match repeat new email")

   User.findById(userId)
   .then((user) => {
      if (!user) {
         callback(new NotFoundError("user not found"))

         return
      }

      if (user.password !== password) {
         callback(new CredentialsError("wrong credentials"))

         return
      }

      if (user.email !== email) {
         callback(new CredentialsError("wrong credentials"))

         return
      }

      user.email = newEmail

      user
         .save()
         .then(() => {callback(null)})
         .catch((error) => callback(new SystemError(error.message)))
   })
   .catch((error) => callback(new SystemError(error.message)))
}

module.exports = updateUserEmail
