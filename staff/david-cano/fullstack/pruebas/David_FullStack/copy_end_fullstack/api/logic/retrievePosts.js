// Importa la función 'validate' desde el archivo 'helpers'
const { validate } = require('./helpers')

// Importa los modelos 'User' y 'Post' desde el archivo '../data/models'
const { User, Post } = require('../data/models')

// Importa los errores personalizados 'NotFoundError' y 'SystemError' desde el archivo './errors'
const { NotFoundError, SystemError } = require('./errors')

// Define una función llamada 'retrievePosts' que recibe un 'userId' y un 'callback'
function retrievePosts(userId, callback) {
    // Valida que 'userId' sea de tipo texto y 'callback' sea una función
    validate.text(userId, 'user id')
    validate.function(callback, 'callback')

    // Busca un usuario en la base de datos usando el 'userId' proporcionado
    User.findById(userId)
        .then(user => {
            // Si no encuentra al usuario, llama al 'callback' con un error 'NotFoundError'
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            // Busca todos los posts en la base de datos y los popula con el nombre del autor
            Post.find().select('-__v').populate('author', 'name').lean()
                .then(posts => {
                    // Modifica cada post para adaptarlo y agregar información adicional
                    posts.forEach(post => {
                        // Convierte el '_id' del post en una cadena y elimina la propiedad '_id'
                        post.id = post._id.toString()
                        delete post._id

                        // Si existe la propiedad '_id' en el autor, la convierte en una cadena y elimina la propiedad '_id'
                        if (post.author._id) {
                            post.author.id = post.author._id.toString()
                            delete post.author._id
                        }

                        // Convierte los '_id' en cadena en la lista de 'likes' del post
                        post.likes = post.likes.map(userObjectId => userObjectId.toString())

                        // Comprueba si el 'userId' está en la lista de 'likes' y lo asigna a la propiedad 'liked'
                        post.liked = post.likes.includes(userId)

                        // Comprueba si el post está guardado por el usuario y lo asigna a la propiedad 'saved'
                        post.saved = user.saved.some(postObjectId => postObjectId.toString() === post.id)
                    })

                    // Llama al 'callback' con los posts en orden inverso (último primero)
                    callback(null, posts.reverse())
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => console.error(new SystemError(error.message)))
}

// Exporta la función 'retrievePosts' para que pueda ser utilizada en otros archivos
module.exports = retrievePosts
