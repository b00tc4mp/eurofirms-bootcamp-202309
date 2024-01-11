const mongoose = require('mongoose')

const retrieveUsers = require('./retrieveUsers')

mongoose.connect('mongodb://127.0.0.1:27017/jonatantest')
    .then(() => {
        try {
            retrieveUsers('65981532f009b743d1a4ba3a', (error, users) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log(posts)
            })
        } catch (error) {
            console.error(error)
        }
    })