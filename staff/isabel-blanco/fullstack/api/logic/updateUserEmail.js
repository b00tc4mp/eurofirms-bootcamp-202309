const { validateText, validateEmail, validatePassword, validateFunction } = require("./helpers/validators")

const { User } = require("../data/models")

function updateUserEmail(userId, newEmail, repeatNewEmail, password, callback) {
    validateText(userId, 'user id')
    validateEmail(newEmail, 'newEmail')
    validateEmail(repeatNewEmail, 'repeatNewEmail')
    validatePassword(password, 'password')
    validateFunction(callback, 'callback')

    if (newEmail !== repeatNewEmail) throw new error("your email do not match")

    User.findById(userId).then((user) => {
        if (!user) {
            callback(new Error("user not found"))

            return
        }

        if (user.password !== password) {
            callback(new Error('wrong credentials'))

            return
        }

        user.email = newEmail

        user.save()
            .then(() => {
                callback(null)
            })
            .catch((error) => {
                callback(error)
            })
    })
}

module.exports = updateUserEmail