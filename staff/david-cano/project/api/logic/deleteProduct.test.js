const mongoose = require('mongoose')
const deleteProduct = require('./deleteProduct')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_test')
    .then(() => {
        try {
            deleteProduct('id Admin?', 'id product? o al reves', error => {
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