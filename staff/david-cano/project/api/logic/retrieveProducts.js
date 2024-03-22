const { Product } = require('../data/models')
const { SystemError } = require('./errors')

function retrieveProducts(callback) {

            Product.find().select('-__v').populate('author', 'role').lean()
                .then(products => {
                    products.forEach(product => {
                        product.id = product._id.toString()
                        delete product._id

                        if (product.author._id) {
                            product.author.id = product.author._id.toString()
                            delete product.author._id
                        }

                        // product.cartItem = user.cartItems.some(productObjectId => productObjectId.toString() === product.id)

                    })

                    callback(null, products.reverse())
                })
                .catch(error => callback(new SystemError(error.message)))
        }

module.exports = retrieveProducts