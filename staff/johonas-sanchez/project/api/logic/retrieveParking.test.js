const mongoose = require('mongoose')

const retrieveParking = require('./retrieveParking')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            retrieveParking('6593d3059ea31c753328c2fd', '65943f8ac86b7845cf97a9cf', (error, parking) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log(parking)
            })
        } catch (error) {
            console.error(error)
        }
    })