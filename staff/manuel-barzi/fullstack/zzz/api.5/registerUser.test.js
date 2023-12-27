const registerUser = require('./registerUser')

registerUser('Bat Man', 'bat@man.com', '123123123', function (error) {
    if (error) {
        console.error(error)

        return
    }

    console.log('user registered')
})

console.log('hola registerUser')