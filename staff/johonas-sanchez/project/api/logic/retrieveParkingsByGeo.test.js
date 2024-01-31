const mongoose = require("mongoose")

const retrieveParkingsByGeo = require("./retrieveParkingsByGeo")

mongoose.connect("mongodb://127.0.0.1:27017/projectTest").then(() => {
   try {
      retrieveParkingsByGeo("659ff26f17960df7a90bae07", 40.030365, -6.087662, 1000)
         .then((parkings) => console.log(parkings))
         .catch((error) => console.error(error))
   } catch (error) {
      console.error(error)
   }
})
