const mongoose = require("mongoose")

const retrieveSavedParkings = require("./retrieveSavedParkings")

mongoose
   .connect("mongodb://127.0.0.1:27017/projectTest")

   .then(() => {
      try {
         retrieveSavedParkings("6593d3059ea31c753328c2fd", (error, parkings) => {
            if (error) {
               console.error(error)

               return
            }
            console.log(parkings)
         })
      } catch (error) {
         console.error(error)
      }
   })
