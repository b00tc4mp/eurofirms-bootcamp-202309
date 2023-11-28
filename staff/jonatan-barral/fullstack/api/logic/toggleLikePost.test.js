const mongoose = require('mongoose')

const toggleLikePost = require('./toggleLikePost')

mongoose.connect('mongodb://127.0.0.1/test')
    .then(() => {
        try {
            toggleLikePost('6564c6ecf1cb1e34a3673d22', '6564c1cb62684fff5d0bd23a', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('toggled like post')
            })
        } catch (error) {
            console.error(error)
        }
    })