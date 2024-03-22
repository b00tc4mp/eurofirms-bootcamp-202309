const { validate } = require('./helpers')

const { User, Product } = require('../data/models')
const { NotFoundError, SystemError } = require('./errors')

function retrieveProductsForUser(userId, callback) {
    validate.text(userId, 'user id')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            Product.find().select('-__v').populate('author', 'name').lean()
                .then(products => {
                    products.forEach(product => {
                        product.id = product._id.toString()
                        delete product._id

                        if (product.author._id) {
                            product.author.id = product.author._id.toString()
                            delete product.author._id
                        }

                        product.cartItem = user.cartItems.some(productObjectId => productObjectId.toString() === product.id)
                    })

                    callback(null, products)
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}
module.exports = retrieveProductsForUser