const mongoose = require('mongoose')

const updateUserEmail = require('./updateUserEmail')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            updateUserEmail('658edafb256bbad09cd4c23c', '123123123', 'manolo@garcia.com', 'manolo2@garcia.com', 'manolo2@garcia.com', error  => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('updated email')
            })
        } catch (error) {
            console.error(error)
        }
    })