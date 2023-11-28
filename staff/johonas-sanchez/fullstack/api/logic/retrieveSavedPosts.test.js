const mongoose = require('mongoose')

const retrieveSavedPosts = require('./retrieveSavedPosts')

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {
        try {
            retrieveSavedPosts('65649f8a2d3a0de8e571532d', (error, posts) => {
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