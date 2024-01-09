const mongoose = require('mongoose')

const registerUser = require('./registerUser')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            registerUser('Wonder Woman', 'wonder@woman.com', '123123123', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('user registered')
            })
        } catch (error) {
            console.error(error)
        }
    })