const mongoose = require('mongoose')

const addCartItem = require('./addCartItem')

mongoose.connect('mongodb://127.0.0.1/:27017/ecommerce_test')
    .then(() => {
        try {
            addCartItem
            ('65608715bab5d765008aa494', '6560899f724c642d12657e2b', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('cart item add')
            })
        } catch (error) {
            console.error(error)
        }
    })