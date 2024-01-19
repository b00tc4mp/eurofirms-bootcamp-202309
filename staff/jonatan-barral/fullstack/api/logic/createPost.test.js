const mongoose = require('mongoose')
const createPost = require('./createPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            createPost('6564c1912ba786cec95c7f3f', 'https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg', 'minio image', 'hello minio', error => {
                if (error) {
                    console.error(error)

                    return
                }

                console.log('created')
            })
        } catch (error) {
            console.error(error)
        }
    })