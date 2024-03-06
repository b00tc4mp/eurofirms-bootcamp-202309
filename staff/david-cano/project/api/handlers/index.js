const registerUserHandler = require('./register_user_handler.js')
const authenticateUserHandler = require('./authenticate_user_handler.js')
const retrieveUserHandler = require('./retrieve_user_handler.js')
const createProductHandler = require('./create_product_handler.js')
const deleteProductHandler = require('./delete_product_handler.js')
const retrieveProductsHandler = require('./retrieve_products_handler.js')
const retrieveCartItemsHandler = require('./retrieve_cart_items_handler.js')
const addCartItemHandler = require('./add_cart_item_handler.js')
const retrieveProductsForUserHandler = require('./retrieve_products_for_user_handler.js')

module.exports = {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    createProductHandler,
    deleteProductHandler,
    retrieveProductsHandler,
    retrieveCartItemsHandler,
    addCartItemHandler,
    retrieveProductsForUserHandler
}