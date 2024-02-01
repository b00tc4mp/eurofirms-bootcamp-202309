const mongoose = require('mongoose')

const authenticateUser = require('./authenticateUser')

mongoose.connect('mongodb://127.0.0.1:27017/projectapi')
    .then(() => {
        try {
            authenticateUser('JBarralAd', 'pr0b4nd0')
                .then(user => console.log('user authenticated', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })