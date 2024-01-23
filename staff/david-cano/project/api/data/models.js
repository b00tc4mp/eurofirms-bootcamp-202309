const mongoose = require('mongoose')

const { Schema, model } = mongoose

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
        enum:['regular', 'admin'],
        default: 'regular'
    }
})

const User = model("User", user)

module.exports = {
    User
}