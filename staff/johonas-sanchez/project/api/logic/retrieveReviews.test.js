const mongoose = require("mongoose")

const retrieveReviews = require("./retrieveReviews")

mongoose.connect("mongodb://127.0.0.1:27017/projectTest").then(() => {
   try {
      retrieveReviews("65acd92a483d5ac330d57429", "65acd92a483d5ac330d57433")
         .then((reviews) => console.log(reviews))
         .catch((error) => console.error(error))
   } catch (error) {
      console.error(error)
   }
})
