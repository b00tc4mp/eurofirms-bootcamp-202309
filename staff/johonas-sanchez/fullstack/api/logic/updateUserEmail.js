const validate = require('./helpers/validate')

const { User } = require("../data/models")

function updateUserEmail(userId, password, email, newEmail, repeatNewEmail, callback) {
   validate.text(userId, "user id")
   validate.password(password, "password")
   validate.email(email, "email")
   validate.email(newEmail, "new email")
   validate.email(repeatNewEmail, "repeat new email")
   validate.function(callback, "callback")

   if (newEmail !== repeatNewEmail) throw new Error("your email do not match")

   User.findById(userId).then((user) => {
      if (!user) {
         callback(new Error("user not found"))

         return
      }

      if (user.password !== password) {
        callback(new Error("wrong credentials"))

        return
     }

      if (user.email !== email) {
         callback(new Error("wrong credentials"))

         return
      }

      user.email = newEmail

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

module.exports = updateUserEmail
