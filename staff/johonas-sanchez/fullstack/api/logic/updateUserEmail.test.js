const mongoose = require('mongoose')

const updateUserEmail = require('./updateUserEmail')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            updateUserEmail('65649f8a2d3a0de8e571532d', 'shakti@maan.com', 'shakti2@maan.com', 'shakti2@maan.com', error  => {
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