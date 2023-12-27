const mongoose = require('mongoose')

const toggleLikePost = require('./toggleLikePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            toggleLikePost('657b6d6e54980c0198933c14', '657b85c8b54b36521b661f4a', error => {
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


