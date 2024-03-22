const mongoose = require('mongoose')

const addCartItem = require('./addCartItem')

mongoose.connect('mongodb://127.0.0.1/ecommerce_test')
    .then(() => {
        try {
            addCartItem
            ('65fa44fb1f95aa973901bc55', '65dd97017331694d723cd0fc', error => {
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