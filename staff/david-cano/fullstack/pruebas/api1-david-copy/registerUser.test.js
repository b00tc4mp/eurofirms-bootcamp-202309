const registerUser = require('./registerUser')

registerUser('Shakti Maan', 'shakti@maan.com', '123123123', function (error) {
    if (error) {
        console.error(error)

        return
    }

    console.log('user registered')
})

console.log('hola registerUser')