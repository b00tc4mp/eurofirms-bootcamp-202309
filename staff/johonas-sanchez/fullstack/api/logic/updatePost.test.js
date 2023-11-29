const mongoose = require('mongoose')

const updatePost = require('./updatePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            updatePost('6564b6d433a8f988fa8ff839', '6564b08b9cc4017d542537b9', (error, post) => {
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