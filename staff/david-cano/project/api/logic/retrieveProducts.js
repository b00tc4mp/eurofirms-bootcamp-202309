// const { validate } = require('./helpers')
// const { User, Product } = require('../data/models')
// const { NotFoundError, SystemError } = require('./errors')

const { Product } = require('../data/models')
const { SystemError } = require('./errors')

function retrieveProducts(callback) {
    // validate.text(userId, 'user id')
    // validate.function(callback, 'callback')

    // User.findById(userId)
    //     .then(user => {
    //         if (!user) {
    //             callback(new NotFoundError('user not found'))

    //             return
    //         }

            // Product.find().select('-__v').populate('author', 'role').lean()
            Product.find()
                .then(products => {
                    // products.forEach(product => {
                    //     product.id = product._id.toString()
                    //     delete product._id

                    //     if (product.author._id) {
                    //         product.author.id = product.author._id.toString()
                    //         delete product.author._id
                    //     }

                    // })

                    callback(null, products.reverse())
                })
                .catch(error => callback(new SystemError(error.message)))
        }
//         .catch(error => console.error(new SystemError(error.message)))
// }
module.exports = retrieveProducts