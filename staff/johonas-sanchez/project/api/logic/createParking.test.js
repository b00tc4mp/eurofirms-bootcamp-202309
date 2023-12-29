const mongoose = require('mongoose')
const createParking = require('./createParking')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            createParking('658edafb256bbad09cd4c23c', 154, 167, error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('created parking')
            })
        } catch (error) {
            console.error(error)
        }
    })