const mongoose = require('mongoose')

const toggleConfirmParking = require('./toggleConfirmParking')

mongoose.connect('mongodb://127.0.0.1/projectTest')
    .then(() => {
        try {
            toggleConfirmParking('6593d3059ea31c753328c2fd', '65943f8ac86b7845cf97a9cf', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('toggled confirm parking')
            })
        } catch (error) {
            console.error(error)
        }
    })