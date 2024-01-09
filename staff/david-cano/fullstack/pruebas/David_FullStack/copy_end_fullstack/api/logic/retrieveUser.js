// Importa la función 'validate' desde el archivo './helpers'
const { validate } = require('./helpers')

// Importa el modelo 'User' desde el archivo '../data/models'
const { User } = require('../data/models')

// Importa los errores 'NotFoundError' y 'SystemError' desde el archivo './errors'
const { NotFoundError, SystemError } = require('./errors')

// Define una función llamada 'retrieveUser' que recibe un 'userId' y un 'callback'
function retrieveUser(userId, callback) {
    // Valida que 'userId' sea un texto y 'callback' sea una función
    validate.text(userId, 'user id')
    validate.function(callback, 'callback')

    // Utiliza el modelo 'User' para buscar un usuario por su 'userId' en la base de datos
    User.findById(userId).select('-_id -email -password -saved -__v').lean()
        // Cuando la operación de búsqueda es exitosa
        .then(user => {
            // Si no se encuentra el usuario, llama al 'callback' con un error 'NotFoundError'
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            // Si se encuentra el usuario, llama al 'callback' con el usuario recuperado
            callback(null, user)
        })
        // Si hay algún error durante la operación, llama al 'callback' con un error 'SystemError'
        .catch(error => callback(new SystemError(error.message)))
}

// Exporta la función 'retrieveUser' para que pueda ser utilizada en otros archivos
module.exports = retrieveUser
