require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const { cors } = require('./utils')

const logic = require('./logic')
const { ContentError, DuplicityError, NotFoundError, CredentialsError, ClearanceError } = require('./logic/errors')

mongoose.connect(process.env.MONGODB_URL)

mongoose.connect('mongodb://127.0.0.1/api')
    .then(() => {
        const api = express()

        api.get('/helloworld', (req, res) => res.send('Hello, World'))

        api.get('/holamundo', (req, res) => res.send('Hola, Mundo'))

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
                        let status = 500

                        if (error instanceof DuplicityError)
                            status = 409

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(201).send()

                })

            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof ContentError || error instanceof RangeError)
                    status = 406
                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                logic.authenticateUser(email, password, (error, userId) => {
                    if (error) {
                        let status = 500
                        if (error instanceof NotFoundError)
                            status = 404
                        else if (error instanceof CredentialsError)
                            status = 401

                        res.status(status).json({ error: error.message })

                        return
                    }

                    const token = jwt.sign({ sub: userId }, process.env.JWT_SECRET, { expiresIn: '10h' })

                    res.json(token)
                })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof ContentError || error instanceof RangeError)
                    status = 406

                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.get('/users', (req, res) => {

            try {
                const token = req.header.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

                logic.retrieveUser(userId, (error, user) => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.json(user)
                })
            } catch (error) {
                let status = 500

                if (error instanceof Type || error instanceof ContentError)
                    status = 406
                else if (error instanceof jwt.JsonWebTokenError)
                    status = 401

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

                const { image, imageDescription, text } = req.body

                logic.createPost(userId, image, imageDescription, text, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(201).send()
                })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof ContentError)
                    status = 406
                else if (error instanceof jwt.JsonWebTokenError)
                    status = 401
                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.get('/posts', (req, res) => {

            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'el cielo es rosa')

                logic.retrievePosts(userId, (error, posts) => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                        return
                    }

                    res.json(posts)
                })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof ContentError)
                    status = 406
                else if (error instanceof jwt.JsonWebTokenError)
                    status = 401

                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.get('/posts/saved', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'el cielo es rosa')

                logic.retrieveSavedPosts(userId, (error, posts) => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.json(posts)
                })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof ContentError)
                    status = 406
                else if (error instanceof jwt.JsonWebTokenError)
                    status = 401

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.get('/posts/mine', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

                logic.retrieveMyPosts(userId, (error, posts) => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.json(posts)
                })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof ContentError)
                    status = 406
                else if (error instanceof jwt.JsonWebTokenError)
                    status = 401

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.patch('/posts/:postId/likes', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'el cielo es rosa')

                const postId = req.params.postId

                logic.toggleLikePost(userId, postId, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof ContentError)
                    status = 406
                else if (error instanceof jwt.JsonWebTokenError)
                    status = 401

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.patch('/posts/:postId/likes', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'el cielo es rosa')

                const postId = req.params.postId

                logic.toggleLikePost(userId, postId, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(400).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof ContentError)
                    status = 406
                else if (error instanceof jwt.JsonWebTokenError)
                    status = 401
                res.status(400).json({ error: error.constructor.error, message: error.message })
            }
        })

        api.patch('/posts/:postId/saves', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

                const postId = req.params.postId

                logic.toggleSavePost(userId, postId, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof ContentError)
                    status = 406
                else if (error instanceof jwt.JsonWebTokenError)
                    status = 401

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.delete('/posts/:postId', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'el cielo es rosa')

                const postId = req.params.postId

                logic.deletePost(userId, postId, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404
                        else if (error instanceof ClearanceError)
                            status = 403

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof ContentError)
                    status = 406
                else if (error instanceof jwt.JsonWebTokenError)
                    status = 401

                res.status(status).json({ error: error.constructor.error, message: error.message })
            }
        })


        api.path('/users/password', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, 'el cielo es rosa')

                const { password, newPassword, repeatNewPassword } = req.body

                logic.updateUserPassword(userId, password, newPassword, repeatNewPassword, error => {
                    if (error) {
                        let status = 500

                        if (error instanceof NotFoundError)
                            status = 404
                        else if (error instanceof CredentialsError)
                            status = 401

                        res.status(status).json({ error: error.constructor.name, message: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                let status = 500

                if (error instanceof TypeError || error instanceof ContentError || error instanceof RangeError)
                    status = 406
                else if (error instanceof jwt.JsonWebTokenError)
                    status = 401

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.listen(process.env.PORT, () => console.log('API listening on port ${process.env.PORT}'))
    })