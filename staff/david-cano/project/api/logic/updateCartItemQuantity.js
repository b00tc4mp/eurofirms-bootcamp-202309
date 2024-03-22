const { validate } = require('./helpers')
const { User, Product } = require('../data/models')
const { NotFoundError, SystemError } = require('./errors')


function updateCartItemQuantity(userId, productId, quantity, callback) {
    validate.text(userId, 'user id')
    validate.text(productId, 'product id')
    validate.number(quantity, 'quantity')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            const cartItem = user.cartItems.find(productObjectId => productObjectId.toString() === productId)

            if (!cartItem) {
                callback(new NotFoundError('Product not found in the cart'));
                return;
            }

            Product.findById(productId)
                .then(product => {
                    if (!product) {
                        callback(new NotFoundError('product not found'))

                        return
                    }

                    product.quantity = quantity
                    product.save()
                        .then(() => {
                            user.save()
                                .then(() => callback(null))
                                .catch(error => callback(new SystemError(error.message)));
                        })
                })
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = 
    updateCartItemQuantity

