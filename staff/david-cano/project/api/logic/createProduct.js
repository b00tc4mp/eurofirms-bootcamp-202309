const { validate } = require('./helpers')
const { User, Product } = require('../data/models')
const { NotFoundError, SystemError, ClearanceError } = require('./errors')

function createProduct(userId, name, img, description, price, quantity, callback) {
    validate.text(userId, 'user id')
    validate.text(name, 'name')
    validate.text(img, 'image')
    validate.text(description, 'description')
    validate.text(price, 'price')
    validate.number(quantity, 'quantity')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('user not found'))

                return
            }

            if (user.role === 'regular') {
                callback(new ClearanceError('user unauthorized'))
                return
            }

            Product.create({ author: userId, name, img, description, price, quantity })
            .then(() => callback(null))
            .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = createProduct