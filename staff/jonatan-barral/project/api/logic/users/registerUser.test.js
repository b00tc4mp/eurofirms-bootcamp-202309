const mongoose = require('mongoose')

const registerUser = require('./registerUser')

mongoose.connect('mongodb://127.0.0.1:27017/jonatantest')
    .then(() => {
        try {
            registerUser('65a647dcca1b2394c85b5f5e', '65a647dcca1b2394c85b5f5e', 'Juez de Prueba 2', 'JPrueba2', 't3st34nd0', 'juez-c')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })