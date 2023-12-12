const mongoose = require('mongoose')
const deletePost = require('./deletePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            deletePost('6565d569fd874b98654ee32f', '6565d5c37b007c99782d1323', error => {
                if(error) {
                    console.error(error)
                    return
                }
                console.log('deleted')
            })
        } catch (error) {
            console.error(error)
        }
    })