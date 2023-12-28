const generateId = require('./helpers/generateId')
const loadUsers = require('./helpers/loadUsers')
const saveUsers = require('./helpers/saveUsers')

function registerUser(name, email, password, callback) {
    //TODO (Hacer) validate inputs
    loadUsers(function (error, users) {
        if (error) {
            callback(error)

            return
        }

        let user = users.find(function (user) {
            return user.email === email
        })

        if (user) {
            callback(new Error('user already exists'))

            return
        }

        user = {
            id: generateId(),
            name,
            email,
            password
        }

        users.push(user)

        saveUsers(users, function (error) {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    })
}

module.exports = registerUser