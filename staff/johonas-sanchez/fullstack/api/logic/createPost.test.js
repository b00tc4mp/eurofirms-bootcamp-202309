const mongoose = require('mongoose')
const createPost = require('./createPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            createPost('6564a0ab3a6687b8a0150b30', 'https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg', 'iron image', 'hello iron', error => {
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