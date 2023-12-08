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

    saved: {
        type: (ObjectId),
        ref: 'Post'
    }
})

const post = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    image: {
        type: String,
        required: true
    },

    imageDescription: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    },

    likes: {
        type: [ObjectId],
        ref: 'User'
    }
})


const User = model('User', user)
const Post = model('Post', post)

module.exports = {
    User,
    Post
}