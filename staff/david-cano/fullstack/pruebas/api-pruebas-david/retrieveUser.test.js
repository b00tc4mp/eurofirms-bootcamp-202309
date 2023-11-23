const retrieveUser = require('./retrieveUser')

retrieveUser('75wpgclmg280', function (error, user) {
    if (error) {
        console.error(error)

        return
    }

    console.log(user)
})

console.log('hola retrieveUser')