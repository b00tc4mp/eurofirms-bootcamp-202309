// Importa la función 'validate' desde el archivo './helpers'
const { validate } = require('./helpers')

// Importa los modelos 'User' y 'Post' desde el archivo '../data/models'
const { User, Post } = require('../data/models')

// Importa las clases de errores 'NotFoundError' y 'SystemError' desde el archivo './errors'
const { NotFoundError, SystemError } = require('./errors')

// Define la función 'toggleSavePost' con los parámetros 'userId', 'postId', y 'callback'
function toggleSavePost(userId, postId, callback) {
    // Utiliza la función 'text' de 'validate' para validar que 'userId' sea una cadena de texto no vacía
    validate.text(userId, 'user id')
    // Utiliza la función 'text' de 'validate' para validar que 'postId' sea una cadena de texto no vacía
    validate.text(postId, 'post id')
    // Utiliza la función 'function' de 'validate' para validar que 'callback' sea una función
    validate.function(callback, 'callback')

    // Busca un usuario en la base de datos por su ID
    User.findById(userId)
        .then(user => {
            // Si el usuario no se encuentra, llama a 'callback' con un error 'NotFoundError'
            if (!user) {
                callback(new NotFoundError('user not found'))
                return
            }

            // Busca un post en la base de datos por su ID
            Post.findById(postId)
                .then(post => {
                    // Si el post no se encuentra, llama a 'callback' con un error 'NotFoundError'
                    if (!post) {
                        callback(new NotFoundError('post not found'))
                        return
                    }

                    // Encuentra el índice del post en la lista de posts guardados por el usuario
                    const index = user.saved.findIndex(postObjectId => postObjectId.toString() === postId)

                    // Si el post no está en la lista, lo añade; de lo contrario, lo elimina
                    if (index < 0)
                        user.saved.push(postId)
                    else
                        user.saved.splice(index, 1)

                    // Guarda los cambios en la base de datos
                    user.save()
                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

// Exporta la función 'toggleSavePost' para que pueda ser utilizada en otros archivos
module.exports = toggleSavePost
