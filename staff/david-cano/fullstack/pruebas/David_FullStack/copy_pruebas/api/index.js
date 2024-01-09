const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const registerUser = require("./logic/registerUser")
const authenticateUser = require("./logic/authenticateUser")
const createPost = require("./logic/createPost")
const retrievePosts = require("./logic/retrievePosts")
const retrievePost = require("./logic/retrievePost")
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
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Allow-Methods", "*")
      res.header("Access-Control-Allow-Headers", "*")

      next()
   }

   api.use("*", cors)

   api.post("/users", cors, jsonBodyParser, (req, res) => {
      try {
         const { name, email, password } = req.body

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
      try {
         const { email, password } = req.body

         authenticateUser(email, password, (error, userId) => {
            if (error) {
               res.status(400).json({ error: error.message })

               return
            }

            // const token = jwt.sign({ sub: userId }, "es posible que pronto sea abuelo", { expiresIn: '10s' }  ) // Ponemos la fecha de expiración del token
            const token = jwt.sign({ sub: userId }, "es posible que pronto sea abuelo" )
            res.json(token)
         })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   })

   // Implement createPost endpoint

   api.post("/posts", jsonBodyParser, (req, res) => {
      try {
         const token = req.headers.authorization.slice(7)
         const { sub: userId } = jwt.verify(token, "es posible que pronto sea abuelo")
         const { image, imageDescription, text } = req.body

         createPost(userId, image, imageDescription, text, (error) => {
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

   // Implement retrievePosts endpoint

   api.get("/posts", (req, res) => {
      try {
         const token = req.headers.authorization.slice(7)
         const { sub: userId } = jwt.verify(token, "es posible que pronto sea abuelo")

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

   // Implement retrieveSavedPosts endpoint

   api.get("/posts/saved", (req, res) => {
      try {
         const token = req.headers.authorization.slice(7)
         const { sub: userId } = jwt.verify(token, "es posible que pronto sea abuelo")

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

   // Implement retrieveMyPosts endpoint

   api.get("/posts/user", (req, res) => {
      try {
         const token = req.headers.authorization.slice(7)
         const { sub: userId } = jwt.verify(token, "es posible que pronto sea abuelo")

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

   // Implement retrievePost endpoint

   api.get("/posts/:postId", (req, res) => {
      const userId = req.headers.authorization.slice(7) // Para que nos quede el userId sin el Bearer
      const postId = req.params.postId

      try {
         retrievePost(userId, postId, (error, post) => {
            if (error) {
               res.status(400).json({ error: error.message })

               return
            }

            res.json(post)
         })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   })

   // Implement toggleLikePost endpoint

   api.patch("/posts/:postId/likes", (req, res) => {
      try {
         const token = req.headers.authorization.slice(7)
         const { sub: userId } = jwt.verify(token, "es posible que pronto sea abuelo")

         const { postId } = req.params

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
      try {
         const token = req.headers.authorization.slice(7)
         const { sub: userId } = jwt.verify(token, "es posible que pronto sea abuelo")
         const postId = req.params.postId

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

   // Implement retrieveUser endpoint

   api.get("/users", (req, res) => {
      try {
         const token = req.headers.authorization.slice(7)

         const { sub: userId } = jwt.verify(token, "es posible que pronto sea abuelo")

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

   // Implement toggleSavePost endpoint

   api.patch("/posts/:postId/saved", (req, res) => {
      try {
         const token = req.headers.authorization.slice(7)
         const { sub: userId } = jwt.verify(token, "es posible que pronto sea abuelo")
         const postId = req.params.postId

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

   // Implement udateUserPassword endpoint

   api.patch("/users/password", jsonBodyParser, (req, res) => {
      try {
         const token = req.headers.authorization.slice(7)
         const { sub: userId } = jwt.verify(token, "es posible que pronto sea abuelo")
         const { password, newPassword, repeatNewPassword } = req.body

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
      const { password, email, newEmail, repeatNewEmail } = body

      try {
         const token = req.headers.authorization.slice(7)
         const { sub: userId } = jwt.verify(token, "es posible que pronto sea abuelo")
         const { password, email, newEmail, repeatNewEmail } = req.body

         updateUserEmail(userId, password, email, newEmail, repeatNewEmail, (error) => {
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
