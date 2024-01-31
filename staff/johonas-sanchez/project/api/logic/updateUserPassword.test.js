const mongoose = require("mongoose")

const updateUserPassword = require("./updateUserPassword")

mongoose.connect("mongodb://127.0.0.1:27017/projectTest").then(() => {
   try {
      updateUserPassword("659ff26f17960df7a90bae07", "123123123", "456456456", "456456456")
         .then(() => console.log("updated password"))
         .catch((error) => console.error(error))
   } catch (error) {
      console.error(error)
   }
})
