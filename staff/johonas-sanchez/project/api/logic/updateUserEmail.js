const { validate } = require("./helpers")
const { User } = require("../data/models")
const { ContentError, CredentialsError, NotFoundError, SystemError } = require("./errors")

function updateUserEmail(userId, password, email, newEmail, repeatNewEmail) {
   validate.id(userId, "user id")
   validate.password(password, "password")
   validate.email(email, "email")
   validate.email(newEmail, "new email")
   validate.email(repeatNewEmail, "repeat new email")

   if (newEmail !== repeatNewEmail) throw new ContentError("new email does not match repeat new email")

   return User.findById(userId)
      .catch((error) => {
         throw new SystemError(error.message)
      })
      .then((user) => {
         if (!user) throw new NotFoundError("user not found")

         if (user.email !== email) throw new CredentialsError("wrong credentials")

         user.email = newEmail

         user
            .save()
            .then(() => null)
            .catch((error) => {
               throw new SystemError(error.message)
            })
      })
}

module.exports = updateUserEmail
