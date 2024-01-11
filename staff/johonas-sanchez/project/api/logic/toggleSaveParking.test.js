const mongoose = require("mongoose")

const toggleSaveParking = require("./toggleSaveParking")

mongoose.connect("mongodb://127.0.0.1/projectTest").then(() => {
   try {
      toggleSaveParking("659ff26f17960df7a90bae07", "659ffa91832bc0bd8da0b407")
         .then(() => console.log("toggled save parking"))
         .catch((error) => console.error(error))
   } catch (error) {
      console.error(error)
   }
})
