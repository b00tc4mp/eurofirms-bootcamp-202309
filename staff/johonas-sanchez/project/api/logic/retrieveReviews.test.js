const mongoose = require("mongoose")

const retrieveReviews = require("./retrieveReviews")

mongoose.connect("mongodb://127.0.0.1:27017/project").then(() => {
   try {
      retrieveReviews("65b0d92ffcefe138b5191d0b", "65b0d930fcefe138b5191d15")
         .then((reviews) => console.log(reviews))
         .catch((error) => console.error(error))
   } catch (error) {
      console.error(error)
   }
})
