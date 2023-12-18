const loadUsers = require('./helpers/loadUsers')

function retrieveUser(userId) {
    // TODO validate input

    const users = loadUsers()

    const user = users.find(function (user) {
        return user.id === userId
    })

    if (!user) throw new Error('user not found')

    return user
}

// export default retrieveUser
module.exports = retrieveUser