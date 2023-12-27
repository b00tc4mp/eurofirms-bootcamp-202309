const fs = require('fs')

function retrieveUser(userId) {
    const text = fs.readFileSync('./users.csv').toString()

    const lines = text.split('\n')

    const users = []

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i]

        const values = line.split(',')

        const [id, name, email, password] = values

        const user = { id, name, email, password }

        users.push(user)
    }

    const user = users.find(function (user) {
        return user.id === userId
    })

    return user
}

// export default retrieveUser
module.exports = retrieveUser