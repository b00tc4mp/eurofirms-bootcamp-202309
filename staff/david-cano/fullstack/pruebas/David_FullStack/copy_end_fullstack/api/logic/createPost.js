// Importa la función 'validate' desde el archivo './helpers'
const { validate } = require('./helpers')

// Importa los modelos 'User' y 'Post' desde el archivo '../data/models'
const { User, Post } = require('../data/models')

// Importa las clases de error 'NotFoundError' y 'SystemError' desde el archivo './errors'
const { NotFoundError, SystemError } = require('./errors')

// Define una función llamada 'createPost' que crea una publicación (post) en base a la información proporcionada
function createPost(userId, image, imageDescription, text, callback) {
    // Utiliza la función 'validate.text' para verificar si 'userId', 'image', 'imageDescription' y 'text' son cadenas de texto válidas
    validate.text(userId, 'user id')
    validate.text(image, 'image')
    validate.text(imageDescription, 'image description')
    validate.text(text, 'text')

    // Utiliza la función 'validate.function' para verificar si 'callback' es una función
    validate.function(callback, 'callback')

    // Busca un usuario en la base de datos con el ID proporcionado
    User.findById(userId)
        .then(user => {
            // Verifica si no se encontró un usuario con el ID dado
            if (!user) {
                // Llama a la función de retorno con un error de usuario no encontrado
                callback(new NotFoundError('user not found'))

                // Retorna para salir de la función
                return
            }

            // Crea una nueva publicación en la base de datos con la información proporcionada
            Post.create({ author: userId, image, imageDescription, text })
                .then(() => callback(null))  // Llama a la función de retorno con 'null' para indicar que no hay error
                .catch(error => callback(new SystemError(error.message)))  // Captura y maneja cualquier error durante la creación de la publicación
        })
        .catch(error => callback(new SystemError(error.message)))  // Captura y maneja cualquier error durante la búsqueda del usuario
}

// Exporta la función 'createPost' para que pueda ser utilizada en otros archivos
module.exports = createPost
