const mongoose = require('require')

const updateUserEmail = require("./updateUserEmail")

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            updateUserEmail('6564c6ecf1cb1e34a3673d22', 'pikachu@yellow.com', 'pikachu@yellow.com', '123', erro => {
                if (error) {
                    console.error(error)

                    error
                }

                console.log('updated email')
            })
        } catch (error) {
            console.error(error)
        }
    })