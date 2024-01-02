const mongoose = require('mongoose')

const toggleConfirmParking = require('./toggleConfirmParking')

mongoose.connect('mongodb://127.0.0.1/projectTest')
    .then(() => {
        try {
            toggleConfirmParking('6593d3059ea31c753328c2fd', '6593e2ef303fba11492e51f9', error => {
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