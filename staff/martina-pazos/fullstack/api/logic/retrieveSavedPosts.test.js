const mongoose = require('mongoose')

const retrieveSavedPosts = require('./retrieveSavedPosts')

mongoose.connect('mongodb://127.0.0.1:27017/test')

    .then(() => {
        try {
            retrieveSavedPosts('657b6d6e54980c0198933c14', (error, posts) => {
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



