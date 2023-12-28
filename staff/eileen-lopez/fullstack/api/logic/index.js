const registerUser = require('./registerUser')
const retrieveUser = require('./retrieveUser')
const authenticateUser = require('./authenticateUser')
const createPost = require('./createPost')
const deletePost = require('./deletePost')
const retrieveMyPosts = require('./retrieveMyPosts')
const retrievePosts = require('./retrievePosts')
const retrieveSavedPosts = require('./retrieveSavedPosts')
const toggleLikePost = require('./toggleLikePost')
const toggleSavePost = require('./toggleSavePost')
const updatePassword = require('./updatePassword')

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updatePassword,
    createPost,
    deletePost,
    retrieveMyPosts,
    retrievePosts,
    retrieveSavedPosts,
    toggleLikePost,
    toggleSavePost
}

module.exports = logic