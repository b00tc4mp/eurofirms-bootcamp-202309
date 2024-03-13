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
    },

    role: {
        type: String,
        enum: ['regular', 'admin'],
        default: 'regular'
    },

    cartItems: {
        type: [ObjectId],
        ref: 'Product'
    }
})

const product = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    name: {
        type: String,
        required: true
    },

    img: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true,
        default: 1 // todo remove this props
    },
})

const User = model("User", user)
const Product = model("Product", product)
module.exports = {
    User,
    Product
}