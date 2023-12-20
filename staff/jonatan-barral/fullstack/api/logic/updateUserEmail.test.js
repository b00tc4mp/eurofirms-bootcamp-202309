const mongoose = require('mongoose')

const updateUserEmail = require('./updateUserEmail')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            updateUserEmail('6564c6ecf1cb1e34a3673d22', 'pepito3@grillo.com', 'pepito3@grillo.com', '789789789', error => {
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