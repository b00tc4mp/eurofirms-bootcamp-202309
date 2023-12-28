const generateId = require('../data/generateId')
const loadUsers = require('../data/loadUsers')
const saveUsers = require('../data/saveUsers')
const { validateText, validateEmail, validatePassword, validateFunction } = require('./helpers/validators')

function registerUser(name, email, password, callback) {
    validateText(name, 'name')
    validateEmail(email, 'email')
    validatePassword(password, 'password')
    validateFunction(callback, 'callback')

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