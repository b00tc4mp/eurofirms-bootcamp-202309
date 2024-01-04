const mongoose = require('mongoose')

const toggleSaveParking = require('./toggleSaveParking')

mongoose.connect('mongodb://127.0.0.1/projectTest')
    .then(() => {
        try {
            toggleSaveParking('6593d3059ea31c753328c2fd', '6593ee340c2dca9e976ce1ca', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('toggled save parking')
            })
        } catch (error) {
            console.error(error)
        }
    })