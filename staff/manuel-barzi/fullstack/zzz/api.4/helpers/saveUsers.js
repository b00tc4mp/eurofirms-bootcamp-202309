const fs = require('fs')

function saveUsers(users) {
    const data = JSON.stringify(users, null, 4)

    fs.writeFileSync('./users.json', data)
}

module.exports = saveUsers