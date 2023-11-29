const express = require('express')
const mongoose = require('mongoose')

const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const createPost = require('./logic/createPost')

mongoose.connect('mongodb://127.0.0.1/api')
    .then(() => {
        const api = express()

        api.get('/helloworld', (req, res) => {
            res.send('Hello, World!')
        })

        api.get('/holamundo', (req, res) => {
            res.send('Hola, Mundo!')
        })

        api.get('/hello', (req, res) => {
            const name = req.query.name

            res.send(`Hello, ${name}!`)
        })

        const jsonBodyParser = express.json()

        api.post('/users', jsonBodyParser, (req, res) => {
            const body = req.body

            const { name, email, password } = body

            try {
                registerUser(name, email, password, error => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.status(201).send()
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        // TODO implement authenticate endpoint

        api.post('/users/authenticate', jsonBodyParser, (req, res) => {
            const body = req.body

            const { email, password } = body

            try {
                authenticateUser(email, password, (error, userId) => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.json(userId)
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        // Implement createPost endpoint

        api.post('/posts/createpost', jsonBodyParser, (req, res) => {
            const body = req.body

            const { userId, image, imageDescription, text } = body

            try {
                createPost(userId, image, imageDescription, text, error => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.status(201).send()
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.listen(4000, () => console.log('API listening on port 4000'))
    })