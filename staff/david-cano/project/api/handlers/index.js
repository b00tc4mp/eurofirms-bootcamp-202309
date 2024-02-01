const registerUserHandler = require('./register_user_handler.js')
const authenticateUserHandler = require('./authenticate_user_handler.js')
const retrieveUserHandler = require('./retrieve_user_handler.js')
const createProductHandler = require('./create_product_handler.js')
const deleteProductHandler = require('./delete_product_handler.js')
const retrieveProductsHandler = require('./retrieve_products_handler.js')



module.exports = {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    createProductHandler,
    deleteProductHandler,
    retrieveProductsHandler
}