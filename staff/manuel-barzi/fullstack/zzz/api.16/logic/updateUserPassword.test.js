const mongoose = require('mongoose')

const updateUserPassword = require('./updateUserPassword')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            updateUserPassword('65840682b7cbc5d89f49b364', '123123123', '345345345', '345345345', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('updated password')
            })
        } catch (error) {
            console.error(error)
        }
    })