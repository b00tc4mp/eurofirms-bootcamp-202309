// Importa la función 'validate' desde el archivo './helpers'
const { validate } = require('./helpers')

// Importa los modelos 'User' y 'Post' desde la carpeta '../data/models'
const { User, Post } = require('../data/models')

// Importa las clases de errores 'NotFoundError' y 'SystemError' desde el archivo './errors'
const { NotFoundError, SystemError } = require('./errors')

// Define una función llamada 'retrieveSavedPosts' que recibe un 'userId' y un 'callback' como parámetros
function retrieveSavedPosts(userId, callback) {
    // Valida que el 'userId' sea de tipo texto y el 'callback' sea una función
    validate.text(userId, 'user id')
    validate.function(callback, 'callback')

    // Busca un usuario por su 'userId' en la base de datos
    User.findById(userId)
        .then(user => {
            // Si no se encuentra el usuario, llama al 'callback' con un error 'NotFoundError'
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            // Accede al array de 'saved' en el usuario que contiene los identificadores de los posts guardados
            user.saved // [ObjectId('asfasdf'), ObjectId('asfasdfasdfasd'), ...]

            // Busca los posts cuyos identificadores estén en el array 'user.saved'
            Post.find({ _id: { $in: user.saved } }).select('-__v').populate('author', 'name').lean()
                .then(posts => {
                    // Para cada post encontrado, modifica y agrega propiedades adicionales
                    posts.forEach(post => {
                        post.id = post._id.toString()
                        delete post._id

                        // Modifica el identificador del autor y elimina la propiedad '_id'
                        if (post.author._id) {
                            post.author.id = post.author._id.toString()
                            delete post.author._id
                        }

                        // Convierte los identificadores de likes a texto y verifica si el usuario actual dio like
                        post.likes = post.likes.map(userObjectId => userObjectId.toString())
                        post.liked = post.likes.includes(userId)

                        // Verifica si el post actual está guardado por el usuario
                        post.saved = user.saved.some(postObjectId => postObjectId.toString() === post.id)
                    })

                    // Llama al 'callback' con los posts recuperados y sin errores
                    callback(null, posts)
                })
                // Si hay un error durante la búsqueda de posts, llama al 'callback' con un error 'SystemError'
                .catch(error => callback(new SystemError(error.message)))
        })
        // Si hay un error durante la búsqueda del usuario, llama al 'callback' con un error 'SystemError'
        .catch(error => callback(new SystemError(error.message)))
}

// Exporta la función 'retrieveSavedPosts' para que pueda ser utilizada en otros archivos
module.exports = retrieveSavedPosts
