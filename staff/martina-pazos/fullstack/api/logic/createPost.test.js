const mongoose = require('mongoose')
const createPost = require('./createPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            createPost('657b6d6e54980c0198933c14', 'https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg', 'imagen superheroe Shaktimaan', 'voy a salvar el mundo 🦾',
                error => {
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