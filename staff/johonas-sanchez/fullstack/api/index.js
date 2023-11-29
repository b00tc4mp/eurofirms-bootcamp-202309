const express = require('express')
const mongoose = require('mongoose')

const registerUser = require('./logic/registerUser')

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

        api.listen(4000, () => console.log('API listening on port 4000'))
    })