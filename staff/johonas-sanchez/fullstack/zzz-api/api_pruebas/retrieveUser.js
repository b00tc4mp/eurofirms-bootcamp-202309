const loadUsers = require('./helpers/loadUsers')

function retrieveUser(userId, callback) {
    // TODO validate input

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