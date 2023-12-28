require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const { cors } = require('./utils')

const {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    createPostHandler,
    retrievePostsHandler,
    retrieveSavedPostsHandler,
    retrieveMyPostsHandler,
    toggleLikePostHandler,
    toggleSavePostHandler,
    deletePostHandler,
    updateUserPasswordHandler
} = require('./handlers')

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        const api = express()

        api.get('/helloworld', (req, res) => res.send('Hello, World!'))

        api.get('/holamundo', (req, res) => res.send('Hola, Mundo!'))

        api.get('/hello', (req, res) => {
            const name = req.query.name

            res.send(`Hello, ${name}!`)
        })

        const jsonBodyParser = express.json()

        api.use(cors)

        api.post('/users', cors, jsonBodyParser, registerUserHandler)

        api.post('/users/auth', jsonBodyParser, authenticateUserHandler)

        api.get('/users', retrieveUserHandler)

        api.post('/posts', jsonBodyParser, createPostHandler)

        api.get('/posts', retrievePostsHandler)

        api.get('/posts/saved', retrieveSavedPostsHandler)

        api.get('/posts/mine', retrieveMyPostsHandler)

        api.patch('/posts/:postId/likes', toggleLikePostHandler)

        api.patch('/posts/:postId/saved', toggleSavePostHandler)

        api.delete('/posts/:postId', deletePostHandler)

        api.patch('/users/password', jsonBodyParser, updateUserPasswordHandler)

        api.listen(process.env.PORT, () => console.log(`API listening on port ${process.env.PORT}`))
    })