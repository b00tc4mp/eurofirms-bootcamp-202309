const mongoose = require('mongoose')
const { User, Post } = require('./models')

const { Types: { ObjectId } } = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {

    const ash = new User({ name: 'Ash Ketchum', email: 'ash@ketchum', password: '123' })
    ash.save().then(() => console.log('ash saved'))


    const post = new Post({
        author: new ObjectId('6560873e8f3518573cbf334c'), image: 'https://static.wikia.nocookie.net/esfinalfantasy/images/0/09/FF9_Chocobo_Artwork.jpg/revision/latest?cb=20081123151821', imageDescription: 'Chocobo', text: 'My chocobo paint'
    })

    post.save().then(() => console.log('campas post saved'))

    console.log('continue...')
})