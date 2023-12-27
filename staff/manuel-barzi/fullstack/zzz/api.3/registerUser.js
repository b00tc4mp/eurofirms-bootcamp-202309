const generateId = require('./helpers/generateId')
const loadUsers = require('./helpers/loadUsers')
const saveUsers = require('./helpers/saveUsers')

function registerUser(name, email, password) {
    // TODO validate inputs

    const users = loadUsers()

    let user = users.find(function (user) {
        return user.email === email
    })

    if (user) throw new Error('user already exists')

    user = {
        id: generateId(),
        name,
        email,
        password
    }

    users.push(user)

    saveUsers(users)
}

module.exports = registerUser