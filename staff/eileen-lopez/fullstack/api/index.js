const express = require('express')
const mongoose = require('mongoose')
const registerUser = require('./logic/registerUser')
const retrieveUser = require('./logic/retrieveUser')
const authenticateUser = require('./logic/authenticateUser')
const createPost = require('./logic/createPost')
const retrievePosts = require('./logic/retrievePosts')
const retrieveMyPosts = require('./logic/retrievePosts')
const toggleLikePost = require('./logic/toggleLikePost')
const deletePost = require('./logic/deletePost')
const toggleSavePost = require('./logic/toggleSavePost')
const retrieveSavedPosts = require('./logic/retrieveSavedPosts')


mongoose.connect('mongodb://127.0.0.1/api')
    .then(() => {
        const api = express()

        api.get('/helloworld', (req, res) => res.send('Hello, world!'))

        api.get('/holamundo', (req, res) => res.send('Hola, Mundo!')
        )

        api.get('hello', (req, res) => {
            const name = req.query.name

            res.send(`Hello, ${name}!`)
        })

    const jsonBodyParser = express.json()

    const cors = (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', '*')
        res.header('Access-Control-Allow-Headers', '*')

        next()
    }

    api.use('*', cors)

    api.post('/users', cors, jsonBodyParser, (req, res) => {
    
    try {
        const { name, email, password } = body
        
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


api.post('/users/auth', jsonBodyParser, (req, res) => {

    try {
        const { email, password } = body

        authenticateUser(email, password, (error, userId) => {
            if (error) {
                res.status(400).json({ error:error.message })
                return
            }
            
            const token = jwt.sign({ sub: userId }, 'pronto sere abuelo', { expiresIn: '10m' })

            res.json(token)
        })
    } catch (error) {
        res.status(400).json({ error:error.message })
    }
})

api.get('/users', (req, res)=> {
    try {
        const token = req.headers.authorization.slice(7)

        const { sub:userId } = jwt.verify(token, 'pronto sere abuelo')

        retrieveUser(userId, (error, user) => {
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

        const { sub: userId } = jwt.verify(token, 'pronto sere abuelo')
        
        const { image, imageDescription, text } = req.body

        createPost(userId, image, imageDescription, text, error => {
            if (error) {
                res.status(400).json({ error: error.message })

                return
            }

            res.status(201).send()
        })
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
})

api.get('./posts', (req, res) =>{
    try {
        const token = req.headers.authorization.slice (7)

        const { sub: userId } = jwt.verify(token, 'pronto sere abuelo')

        retrievePosts(userId, (error, posts) => {
            if (error) {
                res.status(400).json({ error:error.message })
                return
            }
            res.json(posts)
        })
    } catch (error) {
        res.status(400).json({ error:error.message })
    }
})

api.get('/posts/saved', (req, res) => {
    try {
        const token = req.headers.authorization.slice(7)

        const { sub: userId } = jwt.verify(token, 'pronto sere abuelo')

        retrieveSavedPosts(userId, (error, posts) => {
            if(error) {
                res.status(400).json({ error:error.message })
                
                return
            }
            res.json(posts)
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

api.get('posts/mine', (req, res) => {
    try {
        const token = req.headers.authorization.slice(7)

        const { sub: userId } = jwt.verify(token, 'pronto sere abuelo')
    
        retrieveMyPosts(userId, (error, posts) => {
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
        
        const postId = req.params.postId
        
        const { sub: userId } = jwt.verify(token, 'pronto sere abuelo')
        
        toggleLikePost (userId, postId, error => {
            if (error) {
                res.status(400).json({ error:error.message })
                
                return
            }
            res.status(204).send()
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


api.delete('/posts/postId', (req, res) => {
    const userId = req.headers.authorization.slice(7)
    const postId = req.params.postId

    try {
        deletePost(userId, postId, (error) => {
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

api.get('/posts/user', (req, res) => {
    const userId = req.headers.authorization.slice(7)

    try{
        retrieveMyPosts(userId, (error, posts) => {
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

api.patch('/posts/:postId/saved', (req, res) => {
    const userId = req.headers.authorization.slice(7)
    const postId = req.params.postId

    try {
        toggleSavePost(userId, postId, (error) =>{
            if (error) {
                res.status(400)._construct({ error: error.message })
                return
            }
            res.status(204).send()
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    })

    

    api.patch('/users/password', jsonBodyParser, (req, res) => {
        const userId = req.headers.authorization.slice(7)
        const password = req.body.password
        const newPassword = req.body.newPassword
        const repeatNewPassword = req.body.repeatNewPassword

        try {
            updatePassword(userId, password, newPassword, repeatNewPassword, error => {
                if (error) {
                    res.status(400).json({ error: error.message })
                    return
                }
                res.status(204).send()
            })
        } catch (error) {
            res.status(400)
        }
    })


api.listen(4000, () => console.log('API listening on port 4000'))
})



//TODO change password
//TODO change email