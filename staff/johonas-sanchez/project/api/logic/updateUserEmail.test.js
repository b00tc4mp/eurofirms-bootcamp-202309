const mongoose = require("mongoose")

const updateUserEmail = require("./updateUserEmail")

mongoose.connect("mongodb://127.0.0.1:27017/project").then(() => {
   try {
      updateUserEmail("65b125b7ff9da9dac5f522f3", "123123123", "manolo@garcia.com", "manolo2@garcia.com", "manolo2@garcia.com")
         .then(() => console.log("updated email"))
         .catch((error) => console.error(error))
   } catch (error) {
      console.error(error)
   }
})
