const loadUsers = require('../data/loadUsers')
const { validateText, validateFunction } = require('./helpers/validators')

function retrieveUser(userId, callback) {
    validateText(userId, 'userId')
    validateFunction(callback, 'callback')

    loadUsers(function (error, users) {
        if (error) {
            callback(error)

            return
        }

        const user = users.find(function (user) {
            return user.id === userId
        })

        if (!user) throw new Error('user not found')

        callback(null, user)
    })
}

module.exports = retrieveUser