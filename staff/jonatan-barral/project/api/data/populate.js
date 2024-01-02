const mongoose = require('mongoose')
const { User, } = require('./models')

const { Types: { ObjectId } } = mongoose


mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
