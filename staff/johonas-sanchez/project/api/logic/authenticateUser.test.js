const mongoose = require('mongoose')

const authenticateUser = require('./authenticateUser')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            authenticateUser('manolo@garcia.com', '123123123')
            .then(userId => console.log('user authenticated', userId))
            .catch(error => console.error(error))
            
        } catch (error) {
            console.error(error)
        }
    })