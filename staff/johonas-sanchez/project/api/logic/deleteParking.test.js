const mongoose = require('mongoose')
const deleteParking = require('./deleteParking')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            deleteParking('658edafb256bbad09cd4c23c', '658ef07bb421ba1a11c24099', error => {
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