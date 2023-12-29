const mongoose = require('mongoose')

const updateUserPassword = require('./updateUserPassword')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            updateUserPassword('658edafb256bbad09cd4c23c', '456456456', '123123123', '123123123', error  => {
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