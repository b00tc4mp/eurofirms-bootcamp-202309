// Importa el manejador (handler) para registrar a un nuevo usuario
const registerUserHandler = require('./register_user_handler')

// Importa el manejador para autenticar a un usuario
const authenticateUserHandler = require('./authenticate_user_handler')

// Importa el manejador para recuperar información de un usuario
const retrieveUserHandler = require('./retrieve_user_handler')

// Importa el manejador para crear una nueva publicación
const createPostHandler = require('./create_post_handler')

// Importa el manejador para recuperar todas las publicaciones
const retrievePostsHandler = require('./retrieve_posts_handler')

// Importa el manejador para recuperar las publicaciones guardadas por un usuario
const retrieveSavedPostsHandler = require('./retrieve_saved_posts_handler')

// Importa el manejador para recuperar las publicaciones de un usuario específico
const retrieveMyPostsHandler = require('./retrieve_my_posts_handler')

// Importa el manejador para dar o quitar un "me gusta" a una publicación
const toggleLikePostHandler = require('./toggle_like_post_handler')

// Importa el manejador para guardar o quitar la guardada de una publicación por un usuario
const toggleSavePostHandler = require('./toggle_save_post_handler')

// Importa el manejador para eliminar una publicación
const deletePostHandler = require('./delete_post_handler')

// Importa el manejador para actualizar la contraseña de un usuario
const updateUserPasswordHandler = require('./update_user_password_handler')

// Exporta todos los manejadores para que puedan ser utilizados en otras partes del código
module.exports = {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    createPostHandler,
    retrievePostsHandler,
    retrieveSavedPostsHandler,
    retrieveMyPostsHandler,
    toggleLikePostHandler,
    toggleSavePostHandler,
    deletePostHandler,
    updateUserPasswordHandler
}
