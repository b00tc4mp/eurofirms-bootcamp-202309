// Importa la función 'validate' desde el archivo './helpers'
const { validate } = require("./helpers")

// Importa el modelo 'User' desde el archivo '../data/models'
const { User } = require("../data/models")

// Importa los errores personalizados desde el archivo './errors'
const { ContentError, CredentialsError, NotFoundError, SystemError } = require("./errors")

// Define una función llamada 'updateUserEmail' con varios parámetros y una función de retorno ('callback')
function updateUserEmail(userId, password, email, newEmail, repeatNewEmail, callback) {
   // Valida que 'userId' sea un ID válido
   validate.id(userId, "user id")

   // Valida que 'password' sea una contraseña válida
   validate.password(password, "password")

   // Valida que 'email' sea un correo electrónico válido
   validate.email(email, "email")

   // Valida que 'newEmail' sea un nuevo correo electrónico válido
   validate.email(newEmail, "new email")

   // Valida que 'repeatNewEmail' sea una repetición del nuevo correo electrónico válido
   validate.email(repeatNewEmail, "repeat new email")

   // Valida que 'callback' sea una función
   validate.function(callback, "callback")

   // Comprueba si 'newEmail' es diferente de 'repeatNewEmail' y lanza un error si no coinciden
   if (newEmail !== repeatNewEmail) throw new ContentError("new email does not match repeat new email")

   // Busca un usuario en la base de datos por su ID
   User.findById(userId)
      .then((user) => {
         // Si no se encuentra el usuario, llama a la función de retorno con un error
         if (!user) {
            callback(new NotFoundError("user not found"))

            return
         }

         // Comprueba si la contraseña proporcionada coincide con la contraseña almacenada para el usuario
         if (user.password !== password) {
            callback(new CredentialsError("wrong credentials"))

            return
         }

         // Comprueba si el correo electrónico proporcionado coincide con el correo electrónico almacenado para el usuario
         if (user.email !== email) {
            callback(new CredentialsError("wrong credentials"))

            return
         }

         // Actualiza el correo electrónico del usuario con el nuevo correo electrónico
         user.email = newEmail

         // Guarda los cambios en la base de datos
         user
            .save()
            .then(() => {callback(null)})
            .catch((error) => callback(new SystemError(error.message)))
      })
      .catch((error) => callback(new SystemError(error.message)))
}

// Exporta la función 'updateUserEmail' para que pueda ser utilizada en otros archivos
module.exports = updateUserEmail
