const validate = require('./helpers/validate')

const { User } = require("../data/models")

function updateUserPassword(userId, password, newPassword, repeatNewPassword, callback) {
   validate.text(userId, "user id")
   validate.password(password, "password")
   validate.password(newPassword, "new password")
   validate.password(repeatNewPassword, "repeat new password")
   validate.function(callback, "callback")

   if (newPassword !== repeatNewPassword) throw new Error("your password do not match")

   User.findById(userId).then((user) => {
      if (!user) {
         callback(new Error("user not found"))

         return
      }

      if (user.password !== password) {
         callback(new Error("wrong credentials"))

         return
      }

      user.password = newPassword

      user
         .save()
         .then(() => {
            callback(null)
         })
         .catch((error) => {
            callback(error)
         })
   })
}

module.exports = updateUserPassword
