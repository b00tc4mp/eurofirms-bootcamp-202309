const express = require("express")
const mongoose = require("mongoose")

const registerUser = require("./logic/registerUser")
const authenticateUser = require("./logic/authenticateUser")
const createPost = require("./logic/createPost")
const retrievePosts = require("./logic/retrievePosts")
const toggleLikePost = require("./logic/toggleLikePost")
const deletePost = require("./logic/deletePost")
const retrieveUser = require("./logic/retrieveUser")
const retrieveMyPosts = require("./logic/retrieveMyPosts")
const toggleSavePost = require("./logic/toggleSavePost")
const retrieveSavedPosts = require("./logic/retrieveSavedPosts")
const updateUserPassword = require("./logic/updateUserPassword")
const updateUserEmail = require("./logic/updateUserEmail")

mongoose.connect("mongodb://127.0.0.1/api").then(() => {
  const api = express()

  api.get("/helloworld", (req, res) => {
    res.send("Hello, World!")
  })

  api.get("/holamundo", (req, res) => {
    res.send("Hola, Mundo!")
  })

  api.get("/hello", (req, res) => {
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

  api.post("/users", cors, jsonBodyParser, (req, res) => {
    const body = req.body

    const { name, email, password } = body

    try {
      registerUser(name, email, password, (error) => {
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

  // Implement authenticate endpoint

  api.post("/users/authenticate", jsonBodyParser, (req, res) => {
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

  api.post("/posts", jsonBodyParser, (req, res) => {
    const userId = req.headers.authorization.slice(7)
    const body = req.body

    const { image, imageDescription, text } = body

    try {
      createPost(userId, image, imageDescription, text, (error) => {
        if (error) {
          res.status(400).json({ error: error.message })

          return
        }

        res.status(201).send();
      })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  })

  // Implement retrievePosts endpoint

  api.get("/posts", (req, res) => {
    const userId = req.headers.authorization.slice(7); // Para que nos quede el userId sin el Bearer

    try {
      retrievePosts(userId, (error, posts) => {
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

  // Implement toggleLikePost endpoint

  api.patch("/posts/:postId/likes", (req, res) => {
    const userId = req.headers.authorization.slice(7)
    const postId = req.params.postId

    try {
      toggleLikePost(userId, postId, (error) => {
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

  // Implement deletePost endpoint

  api.delete("/posts/:postId", (req, res) => {
    const userId = req.headers.authorization.slice(7)
    const postId = req.params.postId

    try {
      deletePost(userId, postId, (error) => {
        if (error) {
          res.status(400).json({ error: error.message })

          return
        }

        res.status(204).send();
      });
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  })

  // Implement retrieveUser endpoint

  api.get("/users", (req, res) => {
    const userId = req.headers.authorization.slice(7)

    try {
      retrieveUser(userId, (error, user) => {
        if (error) {
          res.status(400).json({ error: error.message })

          return
        }

        res.json(user)
      });
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  })

  // Implement retrieveMyPosts endpoint

  api.get("/posts/user", (req, res) => {
    const userId = req.headers.authorization.slice(7)

    try {
      retrieveMyPosts(userId, (error, posts) => {
        if (error) {
          res.status(400).json({ error: error.message })

          return
        }

        res.json(posts)
      });
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  })
  

  // Implement toggleSavePost endpoint

  api.patch("/posts/:postId/saved", (req, res) => {
    const userId = req.headers.authorization.slice(7)
    const postId = req.params.postId;

    try {
      toggleSavePost(userId, postId, (error) => {
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


  // Implement retrieveSavedPosts endpoint

  api.get("/posts/saved", (req, res) => {
    const userId = req.headers.authorization.slice(7)

    try {
      retrieveSavedPosts(userId, (error, posts) => {
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


  // Implement udateUserPassword endpoint

  api.patch("/users/password", jsonBodyParser, (req, res) => {
    const userId = req.headers.authorization.slice(7)

    const body = req.body
    const {password, newPassword, repeatNewPassword} = body

    try {
      updateUserPassword(userId, password, newPassword, repeatNewPassword, (error) => {
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


  // Implement updateUserEmail endpoint

  api.patch("/users/email", jsonBodyParser, (req, res) => {
    const userId = req.headers.authorization.slice(7)

    const body = req.body
    const {password, email, newEmail, repeatNewEmail} = body

    try {
      updateUserEmail(userId,password, email, newEmail, repeatNewEmail, (error) => {
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

  
  api.listen(4000, () => console.log("API listening on port 4000"))

})







