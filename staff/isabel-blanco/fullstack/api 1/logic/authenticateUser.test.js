const mongoose = require('mongoose')

const authenticateUser = require('mongodb://127.0.0.1:27017/test')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            authenticateUser('Pikachu Yellow', 'pikachu@yellow.com', '123', (error, user) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('user authenticated', userId)
            })
        } catch (error) {
            console.error(error)
        }
    })