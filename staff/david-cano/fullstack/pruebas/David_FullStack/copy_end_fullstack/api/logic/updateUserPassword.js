// Importa la librería 'bcryptjs' para realizar operaciones de hash y comparación de contraseñas
const bcrypt = require('bcryptjs')

// Importa la función 'validate' desde el archivo './helpers'
const { validate } = require('./helpers')

// Importa el modelo 'User' desde el archivo '../data/models'
const { User } = require("../data/models")

// Importa los tipos de errores personalizados desde el archivo './errors'
const { ContentError, CredentialsError, NotFoundError, SystemError } = require('./errors')

// Define la función 'updateUserPassword' que actualiza la contraseña de un usuario
function updateUserPassword(userId, password, newPassword, repeatNewPassword, callback) {
    // Valida que los parámetros cumplan con ciertos criterios (por ejemplo, que sean cadenas de texto)
    validate.text(userId, "user id")
    validate.password(password, "password")
    validate.password(newPassword, "new password")
    validate.password(repeatNewPassword, "repeat new password")
    validate.function(callback, "callback")

    // Compara si la nueva contraseña y su repetición coinciden
    if (newPassword !== repeatNewPassword)
        throw new ContentError("new password does not match repeat new password")

    // Busca al usuario en la base de datos por su ID
    User.findById(userId).then(user => {
        // Si no se encuentra al usuario, llama al callback con un error de usuario no encontrado
        if (!user) {
            callback(new NotFoundError("user not found"))

            return
        }

        // Compara la contraseña proporcionada con la contraseña almacenada del usuario
        bcrypt.compare(password, user.password)
        .then(match => {
            // Si las contraseñas no coinciden, llama al callback con un error de credenciales incorrectas
            if (!match) {
                callback(new CredentialsError("wrong credentials"))

                return
            }

            // Hashea la nueva contraseña y actualiza la contraseña del usuario en la base de datos
            bcrypt.hash(newPassword, 8)
            .then(hash => {
                user.password = hash

                user.save()
                    .then(() => callback(null))
                    .catch(error => callback(new SystemError(error.message)))
            })
            .catch(error => callback(new SystemError(error.message)))
        })
    })
    .catch(error => callback(new SystemError(error.message)))
}

// Exporta la función 'updateUserPassword' para que pueda ser utilizada en otros archivos
module.exports = updateUserPassword
