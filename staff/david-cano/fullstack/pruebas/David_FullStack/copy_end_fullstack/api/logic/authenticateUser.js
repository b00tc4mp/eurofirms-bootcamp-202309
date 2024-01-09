// Importa la biblioteca 'bcryptjs' para realizar operaciones de hashing y comparación de contraseñas
const bcrypt = require('bcryptjs')

// Importa el objeto 'validate' desde el archivo './helpers'
const { validate } = require('./helpers')

// Importa el modelo 'User' desde el archivo '../data/models'
const { User } = require('../data/models')

// Importa las clases de error 'CredentialsError' y 'SystemError' desde el archivo './errors'
const { CredentialsError, SystemError } = require('./errors')

// Define una función llamada 'authenticateUser' que autentica a un usuario mediante su correo electrónico y contraseña
function authenticateUser(email, password, callback) {
    // Utiliza la función 'validate.email' para verificar si 'email' es una cadena de correo electrónico válida
    validate.email(email, 'email')
    
    // Utiliza la función 'validate.password' para verificar si 'password' es una contraseña válida
    validate.password(password, 'password')
    
    // Utiliza la función 'validate.function' para verificar si 'callback' es una función
    validate.function(callback, 'callback')

    // Busca un usuario en la base de datos con el correo electrónico proporcionado
    User.findOne({ email })
        .then(user => {
            // Verifica si no se encontró un usuario con el correo electrónico dado
            if (!user) {
                // Llama a la función de retorno con un error de credenciales
                callback(new CredentialsError('wrong email'))

                // Sale de la función
                return
            }

            // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos utilizando 'bcrypt.compare'
            bcrypt.compare(password, user.password)
                .then(match => match ? callback(null, user.id) : callback(new CredentialsError('wrong password')))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

// Exporta la función 'authenticateUser' para que pueda ser utilizada en otros archivos
module.exports = authenticateUser
