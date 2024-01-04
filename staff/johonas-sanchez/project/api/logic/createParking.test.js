const mongoose = require('mongoose')
const createParking = require('./createParking')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            createParking('659542dc44717b4007453116', 40.030980, -6.086394, error => {
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