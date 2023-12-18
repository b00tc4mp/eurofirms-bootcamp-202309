const { validateText, validateFunction } = require('./helpers/validators')

const { User } = require('../data/models')

function retrieveUser(userId, callback) {
    validateText(userId, 'userId');
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new Error('Usuario no encontrado'));
                return;
            }

            callback(null, user);
        })
        .catch(error => {
            callback(error);
        });
}

module.exports = retrieveUser