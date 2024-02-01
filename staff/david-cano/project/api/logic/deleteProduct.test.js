const mongoose = require('mongoose')
const deleteProduct = require('./deleteProduct')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_test')
    .then(() => {
        try {
            deleteProduct('65ae4884a4c8aaa5bb6c229c', '65bb7a2e60c941fdd4b0b6fa', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('Deleted Product')
            })
        } catch (error) {
            console.error(error)
        }
    })