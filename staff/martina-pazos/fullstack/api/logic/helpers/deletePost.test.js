const mongoose = require('mongoose')
const deletePost = require('./deletePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            deletePost('añadir mi id', 'añadir mi id', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('deleted')
            })
        } catch (error) {
            console.error(error)
        }
    })
