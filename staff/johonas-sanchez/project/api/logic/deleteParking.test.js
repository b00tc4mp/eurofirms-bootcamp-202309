const mongoose = require('mongoose')
const deleteParking = require('./deleteParking')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            deleteParking('6593d3059ea31c753328c2fd', '6593e2ef303fba11492e51f9', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('deleted')
            })
        } catch (error) {
            console.error(error)
        }
    })