const mongoose = require('mongoose')

const retrieveParkingsByGeo = require('./retrieveParkingsByGeo')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            retrieveParkingsByGeo('659542dc44717b4007453116', 40.030365, -6.087662, 1000, (error, parkings) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log(parkings)
            })
        } catch (error) {
            console.error(error)
        }
    })