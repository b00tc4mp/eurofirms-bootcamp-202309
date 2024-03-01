const mongoose = require('mongoose')
const createProduct = require('./createProduct')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_test')
    .then(() => {
        try {
            createProduct('65ae4884a4c8aaa5bb6c229c', 'Móvil nº 10', 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fHww', 'Descripción del móvil', '000 €', 3, error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('Created Product')
            })
        } catch (error) {
            console.error(error)
        }
    })