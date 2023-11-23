const loadUsers = require('../data/loadUsers')
const loadPosts = require('../data/loadPosts')
const { validateText, validateFunction } = require('./helpers/validators')

function retrievePosts(userId, callback) {
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

        if (!user) {
            callback(new Error('user not found'))

            return
        }

        loadPosts(function (error, posts) {
            if (error) {
                callback(error)

                return
            }

            callback(null, posts)
        })
    })
}

module.exports = retrievePosts