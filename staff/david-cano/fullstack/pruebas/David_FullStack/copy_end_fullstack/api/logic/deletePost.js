// Importa la función 'validate' desde el archivo './helpers'
const { validate } = require('./helpers')

// Importa los modelos 'User' y 'Post' desde el archivo '../data/models'
const { User, Post } = require('../data/models')

// Importa las clases de error 'NotFoundError', 'ClearanceError' y 'SystemError' desde el archivo './errors'
const { NotFoundError, ClearanceError, SystemError } = require('./errors')

// Define una función llamada 'deletePost' que elimina una publicación en base al ID de usuario y al ID de publicación proporcionados
function deletePost(userId, postId, callback) {
    // Utiliza la función 'validate.text' para verificar si 'userId' y 'postId' son cadenas de texto válidas
    validate.text(userId, 'user id')
    validate.text(postId, 'post id')

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

            // Busca una publicación en la base de datos con el ID proporcionado
            Post.findById(postId)
                .then(post => {
                    // Verifica si no se encontró una publicación con el ID dado
                    if (!post) {
                        // Llama a la función de retorno con un error de publicación no encontrada
                        callback(new NotFoundError('post not found'))

                        // Retorna para salir de la función
                        return
                    }

                    // Verifica si el autor de la publicación no coincide con el ID de usuario proporcionado
                    if (post.author.toString() !== userId) {
                        // Llama a la función de retorno con un error indicando que la publicación no pertenece al usuario
                        callback(new ClearanceError('post does not belong to user'))

                        // Retorna para salir de la función
                        return
                    }

                    // Elimina la publicación de la base de datos con el ID proporcionado
                    Post.deleteOne({ _id: postId })
                        .then(() => callback(null))  // Llama a la función de retorno con 'null' para indicar que no hay error
                        .catch(error => callback(new SystemError(error.message)))  // Captura y maneja cualquier error durante la eliminación de la publicación
                })
                .catch(error => callback(new SystemError(error.message)))  // Captura y maneja cualquier error durante la búsqueda de la publicación
        })
        .catch(error => callback(new SystemError(error.message)))  // Captura y maneja cualquier error durante la búsqueda del usuario
}

// Exporta la función 'deletePost' para que pueda ser utilizada en otros archivos
module.exports = deletePost
