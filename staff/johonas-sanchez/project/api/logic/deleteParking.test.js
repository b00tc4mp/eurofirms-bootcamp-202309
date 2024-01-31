const mongoose = require("mongoose")
const deleteParking = require("./deleteParking")

mongoose.connect("mongodb://127.0.0.1:27017/projectTest").then(() => {
   try {
      deleteParking("659fe510872799e1147ad4e3", "659ff40ae40afaba0a14cd95")
         .then(() => console.log("deleted parking"))
         .catch((error) => console.error(error))
   } catch (error) {
      console.error(error)
   }
})
