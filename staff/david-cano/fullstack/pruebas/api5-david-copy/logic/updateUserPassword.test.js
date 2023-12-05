const mongoose = require('mongoose')

const updateUserPassword = require('./updateUserPassword')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            updateUserPassword('65649f8a2d3a0de8e571532d', '456456456', '123123123', '123123123', error => {
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