const mongoose = require("mongoose")
const deleteReview = require("./deleteReview")

mongoose.connect("mongodb://127.0.0.1:27017/projectTest").then(() => {
   try {
      deleteReview("659fe510872799e1147ad4e3", "659ff503d98a458c8a7c21f0")
         .then(() => console.log("deleted parking review"))
         .catch((error) => console.error(error))
   } catch (error) {
      console.error(error)
   }
})
