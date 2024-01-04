require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")

const { cors } = require("./utils")

const {
   authenticateUserHandler,
   registerUserHandler,
   retrieveUserHandler,
   createParkingHandler,
} = require('./handlers')

mongoose.connect(process.env.MONGODB_URL).then(() => {
   const api = express()

   const jsonBodyParser = express.json()

   api.use(cors)

   // Implement registerUser endpoint

   api.post("/users", cors, jsonBodyParser, registerUserHandler)

   // Implement authenticate endpoint

   api.post("/users/auth", jsonBodyParser, authenticateUserHandler)

   // Implement retrieveUser endpoint

   api.get("/users", retrieveUserHandler)

   // Implement createParking endpoint

   api.post("/parking", jsonBodyParser, createParkingHandler)



   api.listen(process.env.PORT, () => console.log(`API listening on port ${process.env.PORT}`))
})
