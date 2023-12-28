const fs = require('fs')

function saveUsers(users, callback) {
    const data = JSON.stringify(users, null, 4)

    fs.writeFile('./users.json', data, function (error) {
        if (error) {
            callback(error)

            return
        }

        callback(null)
    })
}

module.exports = saveUsers