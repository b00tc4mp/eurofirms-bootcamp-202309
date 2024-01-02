const mongoose = require('mongoose')
const createParking = require('./createParking')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            createParking('6593d3059ea31c753328c2fd', 154, 167, error => {
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