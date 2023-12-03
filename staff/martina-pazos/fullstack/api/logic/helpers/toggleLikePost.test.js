const mongoose = require('mongoose')
const toggleLikePost = require('./toggleLikePost')

mongooose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleLikePost('añadir mi id', 'añadir mi id', error => {
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


