const mongoose = require('mongoose')
const toggleSavePost = require('./toggleSavePost')

mongoose.connet('mongodb://127.0.0.1/test')
    .then(() => {
        try {
            toggleSavePost('656f33e2a1fe3c5429828ff0', '656f3858b4a15c80f1960c08', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('toggled save post')
            })
        } catch (errror) {
            console.error(error)
        }
    })
