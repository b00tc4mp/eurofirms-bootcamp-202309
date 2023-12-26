const authenticateUserHandler = require('./authenticate-user-handler')
const createPostHandler = require('./create-post-handler')
const deletePostHandler = require('./delete-post-handler')
const registerUserHandler = require('./register-user-handler')
const retrieveMyPostsHandler = require('./retrieve-my-posts-handler')
const retrievePostHandler = require('./retrieve-post-handler')
const retrievePostsHandler = require('./retrieve-posts-handler')
const retrieveSavedPostsHandler = require('./retrieve-saved-posts-handler')
const retrieveUserHandler = require('./retrieve-user-handler')
const toggleLikePostHandler = require('./toggle-like-post-handler')
const toggleSavePostHandler = require('./toggle-save-post-handler')
const updateUserEmailHandler = require('./update-user-email-handler')
const updateUserPasswordHandler = require('./update-user-password-handler')


module.exports = {
    authenticateUserHandler,
    createPostHandler,
    deletePostHandler,
    registerUserHandler,
    retrieveMyPostsHandler,
    retrievePostHandler,
    retrievePostsHandler,
    retrieveSavedPostsHandler,
    retrieveUserHandler,
    toggleLikePostHandler,
    toggleSavePostHandler,
    updateUserEmailHandler,
    updateUserPasswordHandler
}