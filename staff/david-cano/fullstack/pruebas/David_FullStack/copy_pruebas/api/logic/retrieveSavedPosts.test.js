const mongoose = require("mongoose")

const retrieveSavedPosts = require("./retrieveSavedPosts")

mongoose
   .connect("mongodb://127.0.0.1:27017/test")

   .then(() => {
      try {
         retrieveSavedPosts("656748b08dbd4d9b3e300c5a", (error, posts) => {
            if (error) {
               console.error(error)

               return
            }
            console.log(posts)
         })
      } catch (error) {
         console.error(error)
      }
   })
