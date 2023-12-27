const mongoose = require('mongoose')

const updateUserPassword = require('./updateUserPassword')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            updateUserPassword('657b33bcfcda74595a33322b', '123123123', '456456456', '456456456', error => {
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

