/* 
const { validate } = require('./helpers')
const { User } = require('../data/models')

function updateEmail(userId, email, newEmail, repeatNewEmail, callback) {
    validate.text(userId, 'user id')
    validate.email(email, 'email')
    validate.email(newEmail, 'new email')
    validate.email(repeatNewEmail, 'repeat new email')
    validate.function(callback, 'callback')

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
*/