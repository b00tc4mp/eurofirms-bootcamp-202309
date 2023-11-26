const mongoose = require('mongoose')

const authenticateUser = require('./auntheticateUser')

mongoose.connect('mongodb://127.0.0.1:27097/test')
    .then(() => {
        try {
            authenticateUser('shakti@maan.com', '123123123', (error, userId) => {
                if (error) {
                    console.error(error)

                    return
                }
                console.log('user aunthenticate', userId)
            })
        } catch (error) {
            console.error(error)
        }
    })









