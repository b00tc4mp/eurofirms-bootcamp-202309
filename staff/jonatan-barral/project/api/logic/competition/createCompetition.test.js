const mongoose = require('mongoose')
const createCompetition = require('./createCompetition')

mongoose.connect('mongodb://127.0.0.1:27017/projectapi')
    .then(() => {
        return createCompetition('65b618af04b54274575f48c7', '2024/03/31', '2024/03/31', 'Cambre')
    })
    .then(() => {
        console.log('Competición creada')
    })
    .catch(error => {
        console.error(error)
    })
