const mongoose = require('mongoose')

const {updateCartItemQuantity} = require('./updateCartItemQuantity')

mongoose.connect('mongodb://127.0.0.1/ecommerce_test')
    .then(() => {
        try {
            updateCartItemQuantity('65fa44fb1f95aa973901bc55', '65dd97017331694d723cd0fc', 5, error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('update quantity')
            })
        } catch (error) {
            console.error(error)
        }
    })