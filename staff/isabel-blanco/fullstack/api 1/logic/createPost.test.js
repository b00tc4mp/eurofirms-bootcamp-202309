const mongoose = require('mongoose')
const createPost = require('./createPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            createPost('65608715bab5d765008aa494', 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/09/Strong-Chocobo.jpg', 'stronger chocobo image', 'I am feel stronger', error => {
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