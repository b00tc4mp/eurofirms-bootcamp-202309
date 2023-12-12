const { validateText, validateEmail, validateFunction } = require('./helpers/validators')
const { User } = require('../data/models')

function updatePassword(userId, email, newEmail, repeatNewEmail, callback) {
    validateText(userId, 'user id')
    validateEmail(email, 'email')
    validateEmail(newEmail, 'new email')
    validateEmail(repeatNewEmail, 'repeat new email')
    validateFunction(callback, 'callback')

    if(newEmail !== repeatNewEmail)
        throw new Error('new email does not match repeat email')

        User.findById(userId)
            .then(user => {
                if(!user) {
                    callback(new Error ('user not found'))
                    return
                }
                user.password = newPassword
                user.save()
                    .then(() => callback(null))
                    .catch(error => callback(error))
            })
            .catch(error => callback(error))
}
module.exports =updateEmail