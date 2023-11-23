const fs = require('fs')

function loadUsers(callback) {
    fs.readFile('./users.json', function (error, content) {
        if (error) {
            callback(error)

            return
        }

        const data = - content.toString()

        const users = JSON.parse(data)

        callback(null, users)
    })
}

module.exports = loadUsers