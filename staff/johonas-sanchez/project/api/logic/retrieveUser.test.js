const mongoose = require('mongoose')

const retrieveUser = require('./retrieveUser')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
    .then(() => {
        try {
            retrieveUser("6593d3059ea31c753328c2fd", (error, user) => {
                if (error) {
                   console.error(error)
    
                   return
                }
                console.log(user)
             })
          } catch (error) {
             console.error(error)
          }
       })
    