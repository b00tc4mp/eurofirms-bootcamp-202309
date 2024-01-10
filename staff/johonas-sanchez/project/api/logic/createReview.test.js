const mongoose = require('mongoose')
const createReview = require('./createReview')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            createReview('6593d3059ea31c753328c2fd', '65943f8ac86b7845cf97a9cf', 'Plaza pequeña', 6,  error => {
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