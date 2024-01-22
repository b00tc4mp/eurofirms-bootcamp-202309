const mongoose = require('mongoose')

const authenticateUser = require('./authenticateUser')

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        try {
            authenticateUser('paco@martin.com', '123123123')
            .then(userId => console.log('user authenticated', userId))
            .catch(error => console.error(error))
            
        } catch (error) {
            console.error(error)
        }
    })