require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")

const { cors } = require("./utils")

const {
   authenticateUserHandler,
   registerUserHandler,
   retrieveUserHandler,
   createParkingHandler,
   retrieveParkingsHandler,
   retrieveParkingHandler,
   toggleSaveParkingHandler,
   createParkingReviewHandler,
   toggleConfirmParkingHandler,
   retrieveReviewHandler
} = require("./handlers")

mongoose.connect(process.env.MONGODB_URL).then(() => {
   const api = express()

   const jsonBodyParser = express.json()

   api.use(cors)

   // Create registerUser endpoint

   api.post("/users", cors, jsonBodyParser, registerUserHandler)

   // Create authenticate endpoint

   api.post("/users/auth", jsonBodyParser, authenticateUserHandler)

   // Create retrieveUser endpoint

   api.get("/users", retrieveUserHandler)

   // Create createParking endpoint

   api.post("/parkings", jsonBodyParser, createParkingHandler)

   // Create retrieveParkings endpoint

   api.get("/parkings", jsonBodyParser, retrieveParkingsHandler)

   // Create retrieveParking endpoint

   api.get("/parkings/:parkingId", jsonBodyParser, retrieveParkingHandler)

   // Create toggleSaveParking endpoint

   api.patch("/parkings/:parkingId/saved", toggleSaveParkingHandler)

   // Create createParkingReview endpoint

   api.post("/parkings/:parkingId/reviews", jsonBodyParser, createParkingReviewHandler)

   // Create toggleConfirmParking endpoint

   api.patch("/parkings/:parkingId/confirm", toggleConfirmParkingHandler)

   // Create retrieveReview endpoint

   api.get("/reviews/:reviewId", retrieveReviewHandler)



   api.listen(process.env.PORT, () => console.log(`API listening on port ${process.env.PORT}`))
})
