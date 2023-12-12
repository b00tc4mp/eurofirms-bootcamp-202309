const mongoose = require ('mongoose')
const createPost = require('./createPost')
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            createPost('6565d569fd874b98654ee32f', 'https://pbs.twimg.com/media/F-JxDcxWsAA546f?format=jpg&name=small', 'Yellow glitched image', '"This is the girl of my dreams"', error => {
                if (error) {
                    console.error(error)
                    return
                }
                console.log('created')
            })
        } catch (error) {
            console.error(error)
        }
    })