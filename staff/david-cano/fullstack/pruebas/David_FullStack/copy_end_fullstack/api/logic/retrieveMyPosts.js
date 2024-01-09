// Importa la función 'validate' desde el archivo 'helpers'
const { validate } = require('./helpers')

// Importa los modelos 'User' y 'Post' desde el archivo 'models' ubicado en la carpeta 'data'
const { User, Post } = require('../data/models')

// Importa las clases de errores 'NotFoundError' y 'SystemError' desde el archivo 'errors'
const { NotFoundError, SystemError } = require('./errors')

// Define una función llamada 'retrieveMyPosts' que recibe un 'userId' y un 'callback'
function retrieveMyPosts(userId, callback) {
    // Valida que 'userId' sea un string no vacío y 'callback' sea una función
    validate.text(userId, 'user id')
    validate.function(callback, 'callback')

    // Busca un usuario por su 'userId'
    User.findById(userId)
        .then(user => {
            // Si no se encuentra el usuario, ejecuta el 'callback' con un error 'NotFoundError'
            if (!user) {
                callback(new NotFoundError('User not found'))

                return
            }

            // Busca todos los posts cuyo autor sea el usuario con 'userId'
            Post.find({ author: userId }).select('-__v').populate('author', 'name').lean()
                .then(posts => {
                    // Procesa cada post para adaptar su estructura y contenido
                    posts.forEach(post => {
                        // Convierte '_id' a 'id' y elimina la propiedad '_id'
                        post.id = post._id.toString()
                        delete post._id

                        // Si 'author._id' existe, convierte 'author._id' a 'author.id' y elimina 'author._id'
                        if (post.author._id) {
                            post.author.id = post.author._id.toString()
                            delete post.author._id
                        }

                        // Convierte 'likes' y 'saved' a arrays de strings
                        post.likes = post.likes.map(userObjectId => userObjectId.toString())
                        post.saved = user.saved.some(postObjectId => postObjectId.toString() === post.id)

                        // Añade propiedades 'liked' y 'saved' al post
                        post.liked = post.likes.includes(userId)
                        post.saved = user.saved.some(postObjectId => postObjectId.toString() === post.id)
                    })

                    // Ejecuta el 'callback' con los posts procesados
                    callback(null, posts)
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

// Exporta la función 'retrieveMyPosts' para que pueda ser utilizada en otros archivos
module.exports = retrieveMyPosts
