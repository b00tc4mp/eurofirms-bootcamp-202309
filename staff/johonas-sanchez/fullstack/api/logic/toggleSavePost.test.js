const mongoose = require('mongoose')

const toggleSavePost = require('./toggleSavePost')

mongoose.connect('mongodb://127.0.0.1/test')
    .then(() => {
        try {
            toggleSavePost('65649f8a2d3a0de8e571532d', '6564b08b9cc4017d542537b9', error => {
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