const mongoose = require('mongoose')

const registerUser = require('./registerUser')

mongoose.connect('mongodb://127.0.0.1:27017/jonatantest')
    .then(() => {
        try {
            registerUser('65981532f009b743d1a4ba3a', 'Ignacio', 'ITest', 't3st34nd0', 'Secretaría')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })