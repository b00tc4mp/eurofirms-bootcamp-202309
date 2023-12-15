const mongoose = require('mongoose')

const retrievePost = require('./retrievePost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrievePost('657b33bcfcda74595a33322b', '657b6ca2eb5a289c468c9e6d', (error, post) => {
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