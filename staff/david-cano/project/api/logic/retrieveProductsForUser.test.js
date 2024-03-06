
const mongoose = require('mongoose')

const retrieveProductsForUser = require('./retrieveProductsForUser')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_test')
    .then(() => {
        try {
            retrieveProductsForUser('65aef47b2cf08f81288d857c', (error, products) => {
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