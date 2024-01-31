const mongoose = require("mongoose")

const retrieveParking = require("./retrieveParking")

mongoose.connect("mongodb://127.0.0.1:27017/projectTest").then(() => {
   try {
      retrieveParking("659ff26f17960df7a90bae07", "659ff2c4ae2da8f51209f31c")
         .then((parking) => console.log(parking))
         .catch((error) => console.error(error))
   } catch (error) {
      console.error(error)
   }
})
