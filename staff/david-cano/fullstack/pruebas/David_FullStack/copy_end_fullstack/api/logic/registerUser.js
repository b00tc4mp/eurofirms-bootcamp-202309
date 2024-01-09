// Importa el módulo 'bcryptjs' para realizar el hash de contraseñas
const bcrypt = require('bcryptjs')

// Importa la función 'validate' desde el archivo 'helpers'
const { validate } = require('./helpers')

// Importa el modelo 'User' desde el archivo 'models' en la carpeta 'data'
const { User } = require('../data/models')

// Importa los errores 'SystemError' y 'DuplicityError' desde el archivo 'errors'
const { SystemError, DuplicityError } = require('./errors')

// Define la función 'registerUser' que recibe el nombre, email, contraseña y una función de retorno (callback)
function registerUser(name, email, password, callback) {
    // Valida que el nombre sea una cadena no vacía
    validate.text(name, 'name')
    // Valida que el email sea una cadena de texto válida
    validate.email(email, 'email')
    // Valida que la contraseña sea una cadena de texto válida y tenga al menos 8 caracteres
    validate.password(password, 'password')
    // Valida que la función de retorno (callback) sea realmente una función
    validate.function(callback, 'callback')

    // Utiliza 'bcrypt' para realizar el hash de la contraseña
    bcrypt.hash(password, 8)
        .then(hash => {
            // Crea un nuevo usuario en la base de datos con el nombre, email y contraseña hasheada
            User.create({ name, email, password: hash })
                .then(() => callback(null))  // Llama al callback con 'null' si la operación fue exitosa
                .catch(error => {
                    // Si hay un error al crear el usuario
                    if (error.code === 11000) {
                        // Si el código del error es 11000, significa que ya existe un usuario con ese email
                        callback(new DuplicityError('user already exists'))
                        return
                    }

                    // Si el error no es de duplicidad, llama al callback con un error de sistema
                    callback(new SystemError(error.message))
                })
        })
        .catch(error => callback(new SystemError(error.message)))  // Llama al callback con un error de sistema si hay un error con 'bcrypt'
}

// Exporta la función 'registerUser' para que pueda ser utilizada en otros archivos
module.exports = registerUser
