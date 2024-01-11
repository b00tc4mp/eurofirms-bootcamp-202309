const mongoose = require("mongoose")

const updateUserEmail = require("./updateUserEmail")

mongoose.connect("mongodb://127.0.0.1:27017/projectTest").then(() => {
   try {
      updateUserEmail("659ff26f17960df7a90bae07", "123123123", "pa@uno.com", "pa@dos.com", "pa@dos.com")
         .then(() => console.log("updated email"))
         .catch((error) => console.error(error))
   } catch (error) {
      console.error(error)
   }
})
