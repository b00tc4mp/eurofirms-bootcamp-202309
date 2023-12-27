const mongoose = require('mongoose')

const toggleSavePost = require('./toggleSavePost')

mongoose.connect('mongodb://127.0.0.1/test')
    .then(() => {
        try {
            toggleSavePost('657b6d6e54980c0198933c14', '657b85c8b54b36521b661f4a', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('toggled save post')
            })
        } catch (error) {
            console.error(error)
        }
    })
