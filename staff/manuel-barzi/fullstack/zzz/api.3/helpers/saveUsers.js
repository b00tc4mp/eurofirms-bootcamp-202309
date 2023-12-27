const fs = require('fs')

function saveUsers(users) {
    let data = 'id,name,email,password'

    users.forEach(function (user) {
        const line = user.id + ',' + user.name + ',' + user.email + ',' + user.password

        //data2 = data2 + '\n' + line
        data += '\n' + line
    })

    fs.writeFileSync('./users.csv', data)
}

module.exports = saveUsers