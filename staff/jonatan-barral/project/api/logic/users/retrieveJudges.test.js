const mongoose = require('mongoose')

const retrieveJudges = require('./retrieveJudges')

mongoose.connect('mongodb://127.0.0.1:27017/jonatantest')
    .then(() => {
        try {
            retrieveJudges('65a647dcca1b2394c85b5f5e', (error, users) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log(users)
            })
        } catch (error) {
            console.error(error)
        }
    })