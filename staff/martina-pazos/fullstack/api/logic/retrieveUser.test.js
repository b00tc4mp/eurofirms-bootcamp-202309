const mongoose = require('mongoose')

const retrieveUser = require('./retrieveUser')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrieveUser('657b6d6e54980c0198933c14', (error, user) => {
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