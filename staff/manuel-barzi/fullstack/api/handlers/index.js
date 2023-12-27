const registerUserHandler = require('./register-user-handler')
const authenticateUserHandler = require('./auntheticate-user-handler')
const retrieveUserHandler = require('./retrieve-user-handler')
const createPostHandler = require('./create-post-handler')
const retrievePostsHandler = require('./retrieve-posts-handler')
const retrieveSavedPostsHandler = require('./retrieve-saved-posts-handler')
const retrieveMyPostsHandler = require('./retrieve-my-posts-handler')
const toggleLikePostHandler = require('./toggle-like-post-handler')
const toggleSavePostHandler = require('./toggle-save-post-handler')
const deletePostHandler = require('./delete-post-handler')
const updateUserPasswordHandler = require('./update-user-password-handler')


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