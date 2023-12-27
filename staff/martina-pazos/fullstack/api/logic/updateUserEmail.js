const { validateText, validateEmail, validatePassword, validateFunction } = require('./helpers/validators')
const { User } = require('../data/models')

function updateUserEmail(userId, password, email, newEmail, repeatNewEmail, callback) {
    validateText(userId, 'userId')
    validatePassword(password, 'password')
    validateEmail(email, 'email')
    validateEmail(newEmail, 'newEmail')
    validateEmail(repeatNewEmail, 'repeatNewEmail')
    validateFunction(callback, 'callback')

    if (newEmail !== repeatNewEmail)
        throw new Error('new email does noy match repeat new email')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }

            if (user.password !== password) {
                callback(new Error('wrong credentials'))

                return
            }

            user.email = newEmail

            user.save()
                .then(() => callback(null))
                .catch(error => callback(error))

        })

}
module.exports = updateUserEmail






