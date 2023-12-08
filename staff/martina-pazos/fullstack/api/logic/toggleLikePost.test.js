const mongoose = require('mongoose')
const toggleLikePost = require('./toggleLikePost')

mongooose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleLikePost('656f33e2a1fe3c5429828ff0', '656f3858b4a15c80f1960c08', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('post like toggle')
            })
        } catch (error) {
            console.error(error)
        }
    })


