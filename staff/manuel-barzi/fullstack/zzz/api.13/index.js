const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const { cors } = require('./utils')

const logic = require('./logic')

mongoose.connect('mongodb://127.0.0.1/api')
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

        api.post('/users', cors, jsonBodyParser, (req, res) => {
            try {
                const { name, email, password } = req.body

                logic.registerUser(name, email, password, error => {
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

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                logic.authenticateUser(email, password, (error, userId) => {
                    if (error) {
                        res.status(400).json({ error: error.message })
                        return
                    }

                    const token = jwt.sign({ sub: userId }, 'es posible que pronto sea abuelo', { expiresIn: '1m' })

                    res.json(token)
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/users', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'es posible que pronto sea abuelo')

                logic.retrieveUser(userId, (error, user) => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.json(user)
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'es posible que pronto sea abuelo')

                const { image, imageDescription, text } = req.body

                logic.createPost(userId, image, imageDescription, text, error => {
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

        api.get('/posts', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'es posible que pronto sea abuelo')

                logic.retrievePosts(userId, (error, posts) => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.json(posts)
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/posts/saved', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'es posible que pronto sea abuelo')

                logic.retrieveSavedPosts(userId, (error, posts) => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.json(posts)
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/posts/mine', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'es posible que pronto sea abuelo')

                logic.retrieveMyPosts(userId, (error, posts) => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.json(posts)
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/posts/:postId/likes', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'es posible que pronto sea abuelo')

                const postId = req.params.postId

                logic.toggleLikePost(userId, postId, error => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/posts/:postId/saved', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'es posible que pronto sea abuelo')

                const postId = req.params.postId

                logic.toggleSavePost(userId, postId, error => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.delete('/posts/:postId', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'es posible que pronto sea abuelo')

                const postId = req.params.postId

                logic.deletePost(userId, postId, error => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/users/password', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'es posible que pronto sea abuelo')

                const { password, newPassword, repeatNewPassword } = req.body

                logic.updateUserPassword(userId, password, newPassword, repeatNewPassword, error => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.listen(4000, () => console.log('API listening on port 4000'))
    })