const bcrypt = require("bcryptjs")
const { validate } = require("./helpers")
const { User } = require("../data/models")

function updateUserPassword(userId, password, newPassword, repeatNewPassword, callback) {
   validate.text(userId, "user id")
   validate.password(password, "password")
   validate.password(newPassword, "new password")
   validate.password(repeatNewPassword, "repeat new password")
   validate.function(callback, "callback")

   if (newPassword !== repeatNewPassword) throw new Error("your password do not match")

   User.findById(userId)
      .then((user) => {
         if (!user) {
            callback(new Error("user not found"))

            return
         }

         bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
               callback(new Error("wrong credentials"))

               return
            }

            bcrypt
               .hash(newPassword, 8)
               .then((hash) => {
                  user.password = hash

                  user
                     .save()
                     .then(() => callback(null))
                     .catch((error) => callback(error))
               })
               .catch((error) => callback(error))
         })
      })
      .catch((error) => callback(error))
}

module.exports = updateUserPassword
