const mongoose = require("mongoose")

const retrieveParkings = require("./retrieveParkings")

mongoose.connect("mongodb://127.0.0.1:27017/projectTest").then(() => {
   try {
      retrieveParkings("659ff26f17960df7a90bae07")
         .then((parkings) => console.log(parkings))
         .catch((error) => console.error(error))
   } catch (error) {
      console.error(error)
   }
})
