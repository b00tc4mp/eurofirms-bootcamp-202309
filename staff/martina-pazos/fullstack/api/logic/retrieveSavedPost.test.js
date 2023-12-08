const mongoose = require('mongoose')
const retrieveSavedPosts = require('./retrieveSavedPosts')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            retrieveSavedPosts('656f33e2a1fe3c5429828ff0', (error, posts) => {
                if (error) {
                    console.error(error)

                    return
                }
                console.log(posts)
            })
        } catch (error) {
            console.error(error)
        }
    })



