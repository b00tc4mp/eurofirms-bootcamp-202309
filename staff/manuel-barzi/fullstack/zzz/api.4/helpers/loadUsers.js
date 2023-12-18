const fs = require('fs')

function loadUsers() {
    const data = fs.readFileSync('./users.json').toString()

    const users = JSON.parse(data)

    return users
}

module.exports = loadUsers