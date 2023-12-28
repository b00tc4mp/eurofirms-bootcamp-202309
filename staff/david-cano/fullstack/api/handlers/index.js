const registerUserHandler = require('./register_user_handler')
const authenticateUserHandler = require('./authenticate_user_handler')
const retrieveUserHandler = require('./retrieve_user_handler')
const createPostHandler = require('./create_post_handler')
const retrievePostsHandler = require('./retrieve_posts_handler')
const retrieveSavedPostsHandler = require('./retrieve_saved_posts_handler')
const retrieveMyPostsHandler = require('./retrieve_my_posts_handler')
const toggleLikePostHandler = require('./toggle_like_post_handler')
const toggleSavePostHandler = require('./toggle_save_post_handler')
const deletePostHandler = require('./delete_post_handler')
const updateUserPasswordHandler = require('./update_user_password_handler')


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