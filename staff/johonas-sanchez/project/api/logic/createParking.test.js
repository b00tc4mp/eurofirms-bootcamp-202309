const mongoose = require("mongoose")
const createParking = require("./createParking")

mongoose.connect("mongodb://127.0.0.1:27017/projectTest").then(() => {
   try {
      createParking("659fe510872799e1147ad4e3", 40.029402, -6.084969)
         .then(() => console.log("parking registered"))
         .catch((error) => console.error(error))
   } catch (error) {
      console.error(error)
   }
})
