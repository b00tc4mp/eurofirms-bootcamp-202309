const mongoose = require('mongoose')
const createPost = require('./createPost')

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            createPost('tengo que añadir mi id', 'tengo que añadir mi url con la imagen', 'tengo que añadir mi texto describiendo la imagen', 'tengo que añadir mi comentario del post'),
                error => {
                    if (error) {
                        console.error(error)

                        return
                    }

                    console.log('created')

                }
        }
    })