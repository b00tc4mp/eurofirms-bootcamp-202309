const mongoose = require('mongoose')

const toggleSavePost = require('./toggleSavePost')

mongoose.connect('mongodb://127.0.0.1/test')
    .then(() => {
        try {
            toggleSavePost('6564c1912ba786cec95c7f3f', '6564c1cb62684fff5d0bd23a', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('Toggled Save Post')
            })
        } catch (error) {
            console.error(error)
        }
    })