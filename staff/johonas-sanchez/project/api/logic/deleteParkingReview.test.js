const mongoose = require('mongoose')
const deleteParkingReview = require('./deleteParkingReview')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            deleteParkingReview('6593d3059ea31c753328c2fd', '65943a19fd539218aba33880', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('deleted parking review')
            })
        } catch (error) {
            console.error(error)
        }
    })