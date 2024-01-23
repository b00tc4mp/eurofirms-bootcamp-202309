const bcrypt = require("bcryptjs")

const { validate } = require("./helpers")

const { User } = require("../data/models")
const { CredentialsError, SystemError } = require("./errors")

function authenticateUser(email, password) {
   validate.text(email, "email")
   validate.password(password, "password")

   return User.findOne({ email })
      .catch((error) => {
         throw new SystemError(error.message)
      })
      .then((user) => {
         if (!user) throw new CredentialsError("wrong email")

         return bcrypt
            .compare(password, user.password)
            .catch((error) => {
               throw new SystemError(error.message)
            })
            .then((match) => {
               if (match) return { id: user.id, role: user.role }

               throw new CredentialsError("wrong password")
            })
      })
}

module.exports = authenticateUser
