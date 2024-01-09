// Importa la función 'validate' desde el archivo './helpers'
const { validate } = require('./helpers')

// Importa los modelos 'User' y 'Post' desde el archivo '../data/models'
const { User, Post } = require('../data/models')

// Importa las clases de errores 'NotFoundError' y 'SystemError' desde el archivo './errors'
const { NotFoundError, SystemError } = require('./errors')

// Define la función 'toggleLikePost' con tres parámetros: 'userId', 'postId', y 'callback'
function toggleLikePost(userId, postId, callback) {
    // Utiliza la función 'validate.text' para asegurarse de que 'userId' sea un texto no vacío
    validate.text(userId, 'user id')
    // Utiliza la función 'validate.text' para asegurarse de que 'postId' sea un texto no vacío
    validate.text(postId, 'post id')
    // Utiliza la función 'validate.function' para asegurarse de que 'callback' sea una función
    validate.function(callback, 'callback')

    // Busca un usuario en la base de datos por su 'userId'
    User.findById(userId)
        // Cuando la búsqueda es exitosa
        .then(user => {
            // Si no se encuentra el usuario, llama al 'callback' con un error 'NotFoundError'
            if (!user) {
                callback(new NotFoundError('user not found'))
                return
            }

            // Busca un post en la base de datos por su 'postId'
            Post.findById(postId)
                // Cuando la búsqueda del post es exitosa
                .then(post => {
                    // Si no se encuentra el post, llama al 'callback' con un error 'NotFoundError'
                    if (!post) {
                        callback(new NotFoundError('post not found'))
                        return
                    }

                    // Encuentra el índice del 'userId' en la lista de 'likes' del post
                    const index = post.likes.findIndex(userObjectId => userObjectId.toString() === userId)

                    // Si el 'userId' no está en la lista de 'likes', agrégalo; de lo contrario, retíralo
                    if (index < 0)
                        post.likes.push(userId)
                    else
                        post.likes.splice(index, 1)

                    // Guarda los cambios en el post
                    post.save()
                        // Cuando se guardan los cambios exitosamente, llama al 'callback' sin errores
                        .then(() => callback(null))
                        // Si hay un error al guardar, llama al 'callback' con un error 'SystemError'
                        .catch(error => callback(new SystemError(error.message)))
                })
                // Si hay un error al buscar el post, llama al 'callback' con un error 'SystemError'
                .catch(error => callback(new SystemError(error.message)))
        })
        // Si hay un error al buscar el usuario, llama al 'callback' con un error 'SystemError'
        .catch(error => callback(new SystemError(error.message)))
}

// Exporta la función 'toggleLikePost' para que pueda ser utilizada en otros archivos
module.exports = toggleLikePost
