const mongoose = require('mongoose')

const retrieveParkingReview = require('./retrieveParkingReview')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            retrieveParkingReview('6593d3059ea31c753328c2fd', '65952b9b0b24c7c8f3fcbcc7', (error, review) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log(review)
            })
        } catch (error) {
            console.error(error)
        }
    })