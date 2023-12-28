const mongoose = require('mongoose')
const deletePost = require('./deletePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            deletePost('6564b7163a255011af60e4e4', '6564c6a7ec1d5e237090e5f6', error => {
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