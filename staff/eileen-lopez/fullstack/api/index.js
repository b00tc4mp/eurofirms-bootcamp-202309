const express = require('express')
const mongoose = require('mongoose')
const registerUser = require('./logic/registerUser')
const retrieveUser = require('./logic/retrieveUser')

mongoose.connect('mongodb://127.0.0.1/api')
    .then(() => {
        const api = express()
        api.get('/helloworld', (req, res) => {
            res.send('Hello, world!')
        })

        api.get('/holamundo', (req, res) => {
            res.send('Hola, Mundo!')
        })

        api.get('hello', (req, res) => {
            const name = req.query.name
            res.send(`Hello, ${name}!`)
        })

const jsonBodyParser = express.json()

api.post('/users', jsonBodyParser, (req, res) => {
    const body = req.body
    const { name, email, password } = body
    try {
        registerUser(name, email, password, error => {
            if(error){
                res.status(400).json({error: error.message})
                return
            }
            res.status(201).send()
        })
    }catch(error){
        res.status(400).json({error:error.message})
    }
})

api.get('/users', (req, res) =>{
    const userId = req.headers.authorization.slice(7) // 'Bearer 65676be7f37258605cb9cc1f'
    try {
        retrieveUser(userId, (error, user) => {
            if(error) {
                res.status(400).json({error:error.message})
                return
            }
            res.json(user)
        })
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})
api.listen(4000, () => console.log('API listening on port 4000'))
})