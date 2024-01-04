const bcrypt = require("bcryptjs")
const { validate } = require("./helpers")
const { User } = require("../data/models")
const { SystemError, DuplicityError } = require("./errors")

function registerUser(name, email, password, role) {
   validate.text(name, "name")
   validate.email(email, "email")
   validate.password(password, "password")
   validate.text(role, "role")

   return bcrypt.hash(password, 8)
      .then((hash) => User.create({ name, email, password: hash, role }))
      .then(() => {})
      .catch((error) => {
         if (error.code === 11000) throw new DuplicityError("user already exists")

         throw new SystemError(error.message)
      })
}

module.exports = registerUser
