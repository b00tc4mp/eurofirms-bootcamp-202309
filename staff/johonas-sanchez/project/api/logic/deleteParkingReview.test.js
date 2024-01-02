const mongoose = require('mongoose')
const deleteParkingReview = require('./deleteParkingReview')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            deleteParkingReview('6593d3059ea31c753328c2fd', '6594222a8ebab85f970c7db5', error => {
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