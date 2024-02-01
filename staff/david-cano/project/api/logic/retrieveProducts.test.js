const mongoose = require('mongoose')

const retrieveProducts = require('./retrieveProducts')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_test')
    .then(() => {
        try {
            retrieveProducts('65ae4884a4c8aaa5bb6c229c', (error, products) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log(products)
            })
        } catch (error) {
            console.error(error)
        }
    })