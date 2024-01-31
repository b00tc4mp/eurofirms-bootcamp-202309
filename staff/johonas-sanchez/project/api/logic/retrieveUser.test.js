const mongoose = require('mongoose')

const retrieveUser = require('./retrieveUser')

mongoose.connect('mongodb://127.0.0.1:27017/project')
.then(() => {
   try {
       retrieveUser('65ae7c7bd8a7053582009f4f')
           .then(user => console.log('user retrieved', user))
           .catch(error => console.error(error))
   } catch (error) {
       console.error(error)
   }
})
    