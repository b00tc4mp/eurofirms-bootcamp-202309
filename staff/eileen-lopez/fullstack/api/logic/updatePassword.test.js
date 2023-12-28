const mongoose = require('mongoose')
const updatePassword = require('/updatePassword')

mongoose.connect('mongodb:// 127.0.0.1:27017/test')
    .then(() => {
        try {
            updatePassword('6565d569fd874b98654ee32f', '123123123', '456456456', '456456456', error => {
                if (error) {
                    console.error(error)
                    return
                }
                console.log('updated password')
            })
        } catch (error) {
            console.error(error)
        }
    })