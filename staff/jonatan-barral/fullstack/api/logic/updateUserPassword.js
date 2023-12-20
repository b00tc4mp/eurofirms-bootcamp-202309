const { validateText, validatePassword, validateFunction, } = require("./helpers/validators");

const { User } = require("../data/models");

function updateUserPassword(userId, password, newPassword, repeatNewPassword, callback) {
    validateText(userId, "user Id")
    validatePassword(password, "password")
    validatePassword(newPassword, "New password")
    validatePassword(repeatNewPassword, "Repeat new password")
    validateFunction(callback, "callback")

    if (newPassword !== repeatNewPassword) throw new error("your password do not match")

    User.findById(userId).then((user) => {
        if (!user) {
            callback(new Error("user not found"))

            return
        }

        if (user.password !== password) {
            callback(new Error("wrong credentials"))

            return
        }

        user.password = newPassword

        user.save()
            .then(() => {
                callback(null)
            })
            .catch((error) => {
                callback(error);
            })
    });
}

module.exports = updateUserPassword