const mongoose = require('mongoose')

const retrievePost = require('./retrievePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrievePost('', '6565d569fd874b98654ee32f', (error, post) => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log(post)
            })
        } catch (error) {
            console.error(error)
        }
    })