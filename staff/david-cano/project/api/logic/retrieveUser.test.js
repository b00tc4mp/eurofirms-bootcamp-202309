const mongoose = require('mongoose')

const retrieveUser = require('./retrieveUser')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_test')
    .then(() => {
        try {
            retrieveUser('65aef47b2cf08f81288d857c', (error, user) => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log(user)
            })
        } catch (error) {
            console.error(error)
        }
    })