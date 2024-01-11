const mongoose = require("mongoose")

const retrieveReview = require("./retrieveReview")

mongoose.connect("mongodb://127.0.0.1:27017/projectTest").then(() => {
   try {
      retrieveReview("659ff26f17960df7a90bae07", "659ffb5495ee2c755e8c0266")
         .then((review) => console.log(review))
         .catch((error) => console.error(error))
   } catch (error) {
      console.error(error)
   }
})
