const mongoose = require("mongoose")
const createReview = require("./createReview")

mongoose.connect("mongodb://127.0.0.1:27017/projectTest").then(() => {
   try {
      createReview("659fe510872799e1147ad4e3", "659ff2c4ae2da8f51209f31c", "Plaza pequeña", 3)
         .then(() => console.log("created review"))
         .catch((error) => console.error(error))
   } catch (error) {
      console.error(error)
   }
})
