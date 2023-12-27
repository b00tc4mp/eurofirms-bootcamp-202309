require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const { cors } = require("./utils")

const {
   authenticateUserHandler,
   createPostHandler,
   deletePostHandler,
   registerUserHandler,
   retrieveMyPostsHandler,
   retrievePostHandler,
   retrievePostsHandler,

   retrieveUserHandler,


   retrieveSavedPostsHandler,

   toggleLikePostHandler,
   toggleSavePostHandler,

   updateUserPasswordHandler,
   updateUserEmailHandler
} = require('./handlers')

mongoose.connect(process.env.MONGODB_URL).then(() => {
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

   api.use(cors)

   // Implement registerUser endpoint

   api.post("/users", cors, jsonBodyParser, registerUserHandler)

   // Implement authenticate endpoint

   api.post("/users/auth", jsonBodyParser, authenticateUserHandler)

   // Implement createPost endpoint

   api.post("/posts", jsonBodyParser, createPostHandler)

   // Implement retrievePosts endpoint

   api.get("/posts", retrievePostsHandler)

   // Implement retrieveSavedPosts endpoint

   api.get("/posts/saved", retrieveSavedPostsHandler)

   // Implement retrieveMyPosts endpoint

   api.get("/posts/user", retrieveMyPostsHandler)

   // Implement retrievePost endpoint

   api.get("/posts/:postId", retrievePostHandler)

   // Implement toggleLikePost endpoint

   api.patch("/posts/:postId/likes", toggleLikePostHandler)

   // Implement deletePost endpoint

   api.delete("/posts/:postId", deletePostHandler)

   // Implement retrieveUser endpoint

   api.get("/users", retrieveUserHandler)

   // Implement toggleSavePost endpoint

   api.patch("/posts/:postId/saved", toggleSavePostHandler)

   // Implement udateUserPassword endpoint

   api.patch("/users/password", jsonBodyParser, updateUserPasswordHandler)

   // Implement updateUserEmail endpoint

   api.patch("/users/email", jsonBodyParser, updateUserEmailHandler)

   api.listen(process.env.PORT, () => console.log(`API listening on port ${process.env.PORT}`))
})
