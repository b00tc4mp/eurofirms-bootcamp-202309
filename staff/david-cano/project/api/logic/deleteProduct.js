const { validate } = require('./helpers')
const { User, Product } = require('../data/models')
const { NotFoundError, SystemError } = require('./errors')

function deleteProduct(userId, productId, callback) {
    validate.text(userId, 'user id')
    validate.text(productId, 'product id')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            Product.findById(productId)
                .then(product => {
                    if (!product) {
                        callback(new NotFoundError('Product not found'))

                        return
                    }

                    if (product.author.toString() !== userId) {
                        callback(new NotFoundError('product does not belong to user'))

                        return
                    }

                    Product.deleteOne({ _id: productId })
                        .then(() => callback(null))
                        .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = deleteProduct