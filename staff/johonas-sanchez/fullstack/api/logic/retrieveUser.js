const { validateText, validateFunction } = require('./helpers/validators')

const { User } = require('../data/models')

function retrieveUser(userId, callback) {
    validateText(userId, 'user id')
    validateFunction(callback, 'callback')

    User.findById(userId).select('-_id -__v').lean()
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