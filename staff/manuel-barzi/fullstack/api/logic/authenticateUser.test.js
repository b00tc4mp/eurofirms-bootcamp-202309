const mongoose = require('mongoose')

const authenticateUser = require('./authenticateUser')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            authenticateUser('shakti@maan.com', '123123123')
                .then(userId => console.log('user authenticated', userId))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })