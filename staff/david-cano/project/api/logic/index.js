const registerUser = require('./registerUser')
const retrieveUser = require('./retrieveUser')
const authenticateUser = require('./authenticateUser')
const createProduct = require('./createProduct')
const deleteProduct = require('./deleteProduct')
const retrieveProducts = require('./retrieveProducts')
const retrieveCartItems = require('./retrieveCartItems')
const addCartItem = require('./addCartItem')

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createProduct,
    deleteProduct,
    retrieveProducts,
    retrieveCartItems,
    addCartItem
}

module.exports = logic