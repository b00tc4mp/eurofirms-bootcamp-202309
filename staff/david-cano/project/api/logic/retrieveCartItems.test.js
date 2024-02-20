const mongoose = require('mongoose')

const retrieveCartItems = require('./retrieveCartItems')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_test')

    .then(() => {
        try {
            retrieveCartItems
            //id de usuario
            ('6560873e8f3518573cbf334c', (error, products) => {
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