const fs = require('fs')
const generateId = require('./helpers/generateId')

function registerUser(name, email, password) {
    // TODO validate inputs

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

    let data2 = 'id,name,email,password'

    users.forEach(function (user) {
        const line = user.id + ',' + user.name + ',' + user.email + ',' + user.password

        //data2 = data2 + '\n' + line
        data2 += '\n' + line
    })

    fs.writeFileSync('./users.csv', data2)
}

module.exports = registerUser