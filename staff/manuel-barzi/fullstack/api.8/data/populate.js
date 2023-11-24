const mongoose = require('mongoose')

const { Schema, model, Types: { ObjectId } } = mongoose

const user = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
})

const User = model('User', user)

mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
    // const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123' })
    // pepito.save().then(() => console.log('pepito saved'))

    // const campa = new User({ name: 'Campa Nilla', email: 'campa@nilla.com', password: '123123123' })
    // campa.save().then(() => console.log('campa saved'))

    //User.deleteOne({ _id: new ObjectId('65607f164c29d64cb0c2b500') }).then(() => console.log('pepito deleted'))

    //User.updateOne({ _id: new ObjectId('65608156b92116f69ad659b5') }, { $set: { name: '🤡' } }).then(() => console.log('campa updated'))

    User.find().then(users => console.log(users))

    console.log('continue...')
})