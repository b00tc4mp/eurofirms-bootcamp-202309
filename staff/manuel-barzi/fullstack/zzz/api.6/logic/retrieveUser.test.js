const retrieveUser = require('./retrieveUser')

retrieveUser('1hzn6z47hckg', function (error, user) {
    if (error) {
        console.error(error)

        return
    }

    console.log(user)
})

console.log('hola retrieveUser')
