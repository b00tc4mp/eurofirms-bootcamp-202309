const mongoose = require('mongoose')
const toggleSavePost = require('./toggleSavePost')

mongoose.connet('mongodb://127.0.0.1/test')
    .then(() => {
        try {
            toggleSavePost('tengo que añadir mis id', 'tengo que añadir mis id', error => {
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
