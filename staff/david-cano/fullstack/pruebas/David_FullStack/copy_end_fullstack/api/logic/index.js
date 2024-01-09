// Importa la función 'registerUser' desde el archivo 'registerUser'
const registerUser = require('./registerUser')
// Importa la función 'retrieveUser' desde el archivo 'retrieveUser'
const retrieveUser = require('./retrieveUser')
// Importa la función 'authenticateUser' desde el archivo 'authenticateUser'
const authenticateUser = require('./authenticateUser')
// Importa la función 'createPost' desde el archivo 'createPost'
const createPost = require('./createPost')
// Importa la función 'deletePost' desde el archivo 'deletePost'
const deletePost = require('./deletePost')
// Importa la función 'retrieveMyPosts' desde el archivo 'retrieveMyPosts'
const retrieveMyPosts = require('./retrieveMyPosts')
// Importa la función 'retrievePosts' desde el archivo 'retrievePosts'
const retrievePosts = require('./retrievePosts')
// Importa la función 'retrieveSavedPosts' desde el archivo 'retrieveSavedPosts'
const retrieveSavedPosts = require('./retrieveSavedPosts')
// Importa la función 'toggleLikePost' desde el archivo 'toggleLikePost'
const toggleLikePost = require('./toggleLikePost')
// Importa la función 'toggleSavePost' desde el archivo 'toggleSavePost'
const toggleSavePost = require('./toggleSavePost')
// Importa la función 'updateUserPassword' desde el archivo 'updateUserPassword'

// Crea un objeto llamado 'logic' que contiene todas las funciones importadas
const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUserPassword,
    createPost,
    deletePost,
    retrieveMyPosts,
    retrievePosts,
    retrieveSavedPosts,
    toggleLikePost,
    toggleSavePost
}

// Exporta el objeto 'logic' para que pueda ser utilizado en otros archivos
module.exports = logic
