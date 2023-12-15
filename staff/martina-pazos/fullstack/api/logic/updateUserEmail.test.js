const mongoose = require('mongoose')

const updateUserEmail = require('./updateUserEmail')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            updateUserEmail('657b6d6e54980c0198933c14', '123123123', 'zipi@zape.com', 'zipi@zape2.com', 'zipi@zape2.com', error => {
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