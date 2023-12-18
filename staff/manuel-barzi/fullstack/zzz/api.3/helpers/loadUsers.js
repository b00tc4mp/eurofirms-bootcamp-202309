const fs = require('fs')

function loadUsers() {
    const data = fs.readFileSync('./users.csv').toString()

    const lines = data.split('\n')

    const users = []

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i]

        const values = line.split(',')

        const [id, name, email, password] = values

        const user = { id, name, email, password }

        users.push(user)
    }

    return users
}

module.exports = loadUsers