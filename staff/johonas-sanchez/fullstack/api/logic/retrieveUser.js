const { validate } = require('./helpers')
const { User } = require('../data/models')

function retrieveUser(userId, callback) {
    validate.text(userId, 'user id')
    validate.function(callback, 'callback')

    User.findById(userId).select('-password -__v').lean()
    // User.findById(userId).lean() Con el select en negativo puedo eliminar las propiedades que me devuelve
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }

            callback(null, user)
        })
        .catch(error => {
            callback(error)
        })
}

module.exports = retrieveUser