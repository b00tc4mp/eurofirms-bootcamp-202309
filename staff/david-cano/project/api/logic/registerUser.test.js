const mongoose = require('mongoose')

const registerUser = require('./registerUser')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_test')
    .then(() => {
        try {
            registerUser('El Mismo', 'el@mismo.com', '123123123', 'regular', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('Registered user successfully')
            })
        } catch (error) {
            console.error(error)
        }
    }) 