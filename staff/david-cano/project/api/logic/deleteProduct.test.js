const mongoose = require('mongoose')
const deleteProduct = require('./deleteProduct')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_test')
    .then(() => {
        try {
            deleteProduct('65ae4884a4c8aaa5bb6c229c', '65e13ff07c1a2f977e47711d', error => {
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