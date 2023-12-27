const registerUser = require('./registerUser')
const retrieveUser = require('./retrieveUser')
const authenticateUser = require('./authenticateUser')
const createPost = require('./createPost')
const deletePost = require('./deletePost')
const retrieveMyPosts = require('./retrieveMyPosts')
const retrievePosts = require('./retrievePosts')
const retrievePost = require('./retrievePost')
const retrieveSavedPosts = require('./retrieveSavedPosts')
const toggleLikePost = require('./toggleLikePost')
const toggleSavePost = require('./toggleSavePost')
const updateUserEmail = require('./updateUserEmail')
const updateUserPassword = require('./updateUserPassword')

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUserEmail,
    updateUserPassword,
    createPost,
    deletePost,
    retrieveMyPosts,
    retrievePosts,
    retrievePost,
    retrieveSavedPosts,
    toggleLikePost,
    toggleSavePost
}

module.exports = logic