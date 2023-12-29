const mongoose = require('mongoose')
const { User, Post } = require('./models')

const { Types: { ObjectId } } = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
    const post = new Post({ author: new ObjectId('6560873e8f3518573cbf334c'), image: 'https://m.media-amazon.com/images/I/61stTpKBWtL._UF894,1000_QL80_.jpg, imageDescription: ', imageDescription: 'Chocobo disc', text: 'My new chocobo disc' })

    post.save().then(() => console.log('campas post saved'))

    console.log('continue...')
})