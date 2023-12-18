const { validateText, validatePassword, validateEmail, validateFunction } = require("./helpers/validators")

const { User } = require("../data/models")

function updateUserEmail(userId, password, email, newEmail, repeatNewEmail, callback) {
    validateText(userId, "userId")
    validatePassword(password, "password")
    validateEmail(email, "email")
    validateEmail(newEmail, "new email")
    validateEmail(repeatNewEmail, "repeat new email")
    validateFunction(callback, "callback")

    if (newEmail !== repeatNewEmail) throw new Error("your email do not match")

    User.findById(userId).then((user) => {
        if (!user) {
            callback(new Error("user not found"))

            return
        }

        if (user.password !== password) {
            callback(new Error("wrong credentials"))

            return
        }

        if (user.email !== email) {
            callback(new Error("wrong credentials"))

            return
        }

        user.email = newEmail

        user
            .save()
            .then(() => {
                callback(null)
            })
            .catch((error) => {
                callback(error)
            })
    })
}

module.exports = updateUserEmail