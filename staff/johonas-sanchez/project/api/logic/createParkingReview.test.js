const mongoose = require('mongoose')
const createParkingReview = require('./createParkingReview')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            createParkingReview('6593d3059ea31c753328c2fd', '6593ee340c2dca9e976ce1ca', 'Plaza pequeña', 6,  error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('created review')
            })
        } catch (error) {
            console.error(error)
        }
    })