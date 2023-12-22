require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const { cors } = require("./utils")

const logic = require("./logic")
const { ContentError, DuplicityError, NotFoundError, CredentialsError, ClearanceError } = require("./logic/errors")

mongoose.connect(process.env.MONGODB_URL).then(() => {
    const api = express()



    const jsonBodyParser = express.json()

    api.use(cors)

    // Implement registerUser endpoint

    api.post("/users", cors, jsonBodyParser, (req, res) => {
        try {
            const { name, email, password } = req.body

            logic.registerUser(name, email, password, (error) => {
                if (error) {
                    let status = 500

                    if (error instanceof DuplicityError) status = 409

                    res.status(status).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.status(201).send()
            })
        } catch (error) {
            let status = 500

            if (error instanceof TypeError || error instanceof ContentError || error instanceof RangeError) status = 406

            res.status(status).json({ error: error.constructor.name, message: error.message })
        }
    })

    // Implement authenticate endpoint

    api.post("/users/authenticate", jsonBodyParser, (req, res) => {
        try {
            const { email, password } = req.body

            logic.authenticateUser(email, password, (error, userId) => {
                if (error) {
                    let status = 500

                    if (error instanceof NotFoundError) status = 404
                    else if (error instanceof CredentialsError) status = 401

                    res.status(status).json({ error: error.message })

                    return
                }

                // const token = jwt.sign({ sub: userId }, "es posible que pronto sea abuelo", { expiresIn: '10s' }  ) // Ponemos la fecha de expiración del token
                const token = jwt.sign({ sub: userId }, process.env.JWT_SECRET)
                res.json(token)
            })
        } catch (error) {
            let status = 500

            if (error instanceof TypeError || error instanceof ContentError || error instanceof RangeError) status = 406

            res.status(status).json({ error: error.constructor.name, message: error.message })
        }
    })

    // Implement createPost endpoint

    api.post("/posts", jsonBodyParser, (req, res) => {
        try {
            const token = req.headers.authorization.slice(7)
            const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)
            const { image, imageDescription, text } = req.body

            logic.createPost(userId, image, imageDescription, text, (error) => {
                if (error) {
                    let status = 500

                    if (error instanceof NotFoundError) status = 404

                    res.status(status).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.status(201).send()
            })
        } catch (error) {
            let status = 500

            if (error instanceof TypeError || error instanceof ContentError) status = 406
            else if (error instanceof jwt.JsonWebTokenError) status = 401

            res.status(status).json({ error: error.constructor.name, message: error.message })
        }
    })

    // Implement retrievePosts endpoint

    api.get("/posts", (req, res) => {
        try {
            const token = req.headers.authorization.slice(7)
            const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

            logic.retrievePosts(userId, (error, posts) => {
                if (error) {
                    let status = 500

                    if (error instanceof NotFoundError) status = 404

                    res.status(status).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.json(posts)
            })
        } catch (error) {
            let status = 500

            if (error instanceof TypeError || error instanceof ContentError) status = 406
            else if (error instanceof jwt.JsonWebTokenError) status = 401

            res.status(status).json({ error: error.constructor.name, message: error.message })
        }
    })

    // Implement retrieveSavedPosts endpoint

    api.get("/posts/saved", (req, res) => {
        try {
            const token = req.headers.authorization.slice(7)
            const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

            logic.retrieveSavedPosts(userId, (error, posts) => {
                if (error) {
                    let status = 500

                    if (error instanceof NotFoundError) status = 404

                    res.status(status).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.json(posts)
            })
        } catch (error) {
            let status = 500

            if (error instanceof TypeError || error instanceof ContentError) status = 406
            else if (error instanceof jwt.JsonWebTokenError) status = 401

            res.status(status).json({ error: error.constructor.name, message: error.message })
        }
    })

    // Implement retrieveMyPosts endpoint

    api.get("/posts/user", (req, res) => {
        try {
            const token = req.headers.authorization.slice(7)
            const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

            logic.retrieveMyPosts(userId, (error, posts) => {
                if (error) {
                    let status = 500

                    if (error instanceof NotFoundError) status = 404

                    res.status(status).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.json(posts)
            })
        } catch (error) {
            let status = 500

            if (error instanceof TypeError || error instanceof ContentError) status = 406
            else if (error instanceof jwt.JsonWebTokenError) status = 401

            res.status(status).json({ error: error.constructor.name, message: error.message })
        }
    })

    // Implement retrievePost endpoint

    api.get("/posts/:postId", (req, res) => {
        const userId = req.headers.authorization.slice(7) // Para que nos quede el userId sin el Bearer
        const postId = req.params.postId

        try {
            logic.retrievePost(userId, postId, (error, post) => {
                if (error) {
                    let status = 500

                    if (error instanceof NotFoundError) status = 404

                    res.status(status).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.json(post)
            })
        } catch (error) {
            let status = 500

            if (error instanceof TypeError || error instanceof ContentError) status = 406
            else if (error instanceof jwt.JsonWebTokenError) status = 401

            res.status(status).json({ error: error.constructor.name, message: error.message })
        }
    })

    // Implement toggleLikePost endpoint

    api.patch("/posts/:postId/likes", (req, res) => {
        try {
            const token = req.headers.authorization.slice(7)
            const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

            const { postId } = req.params

            logic.toggleLikePost(userId, postId, (error) => {
                if (error) {
                    let status = 500

                    if (error instanceof NotFoundError) status = 404

                    res.status(status).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.status(204).send()
            })
        } catch (error) {
            let status = 500

            if (error instanceof TypeError || error instanceof ContentError) status = 406
            else if (error instanceof jwt.JsonWebTokenError) status = 401

            res.status(status).json({ error: error.constructor.name, message: error.message })
        }
    })

    // Implement deletePost endpoint

    api.delete("/posts/:postId", (req, res) => {
        try {
            const token = req.headers.authorization.slice(7)
            const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)
            const postId = req.params.postId

            logic.deletePost(userId, postId, (error) => {
                if (error) {
                    let status = 500

                    if (error instanceof NotFoundError) status = 404
                    else if (error instanceof ClearanceError) status = 403

                    res.status(status).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.status(204).send()
            })
        } catch (error) {
            let status = 500

            if (error instanceof TypeError || error instanceof ContentError) status = 406
            else if (error instanceof jwt.JsonWebTokenError) status = 401

            res.status(status).json({ error: error.constructor.name, message: error.message })
        }
    })

    // Implement retrieveUser endpoint

    api.get("/users", (req, res) => {
        try {
            const token = req.headers.authorization.slice(7)

            const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

            logic.retrieveUser(userId, (error, user) => {
                if (error) {
                    let status = 500

                    if (error instanceof NotFoundError) status = 404

                    res.status(status).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.json(user)
            })
        } catch (error) {
            let status = 500

            if (error instanceof TypeError || error instanceof ContentError) status = 406
            else if (error instanceof jwt.JsonWebTokenError) status = 401

            res.status(status).json({ error: error.constructor.name, message: error.message })
        }
    })

    // Implement toggleSavePost endpoint

    api.patch("/posts/:postId/saved", (req, res) => {
        try {
            const token = req.headers.authorization.slice(7)
            const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)
            const postId = req.params.postId

            logic.toggleSavePost(userId, postId, (error) => {
                if (error) {
                    let status = 500

                    if (error instanceof NotFoundError) status = 404

                    res.status(status).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.status(204).send()
            })
        } catch (error) {
            let status = 500

            if (error instanceof TypeError || error instanceof ContentError) status = 406
            else if (error instanceof jwt.JsonWebTokenError) status = 401

            res.status(status).json({ error: error.constructor.name, message: error.message })
        }
    })

    // Implement udateUserPassword endpoint

    api.patch("/users/password", jsonBodyParser, (req, res) => {
        try {
            const token = req.headers.authorization.slice(7)
            const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)
            const { password, newPassword, repeatNewPassword } = req.body

            logic.updateUserPassword(userId, password, newPassword, repeatNewPassword, (error) => {
                if (error) {
                    let status = 500

                    if (error instanceof NotFoundError) status = 404
                    else if (error instanceof CredentialsError) status = 401

                    res.status(status).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.status(204).send()
            })
        } catch (error) {
            let status = 500

            if (error instanceof TypeError || error instanceof ContentError || error instanceof RangeError) status = 406
            else if (error instanceof jwt.JsonWebTokenError) status = 401

            res.status(status).json({ error: error.constructor.name, message: error.message })
        }
    })

    // Implement updateUserEmail endpoint

    api.patch("/users/email", jsonBodyParser, (req, res) => {
        try {
            const token = req.headers.authorization.slice(7)
            const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)
            const { password, email, newEmail, repeatNewEmail } = req.body

            logic.updateUserEmail(userId, password, email, newEmail, repeatNewEmail, (error) => {
                if (error) {
                    let status = 500

                    if (error instanceof NotFoundError) status = 404
                    else if (error instanceof CredentialsError) status = 401

                    res.status(status).json({ error: error.constructor.name, message: error.message })

                    return
                }

                res.status(204).send()
            })
        } catch (error) {
            let status = 500

            if (error instanceof TypeError || error instanceof ContentError || error instanceof RangeError) status = 406
            else if (error instanceof jwt.JsonWebTokenError) status = 401

            res.status(status).json({ error: error.constructor.name, message: error.message })
        }
    })

    api.listen(process.env.PORT, () => console.log(`API listening on port ${process.env.PORT}`))
})