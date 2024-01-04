const mongoose = require('mongoose')

const retrieveUser = require('./retrieveUser')

mongoose.connect('mongodb://127.0.0.1:27017/projectTest')
.then(() => {
   try {
       retrieveUser('658c3e141850d055fc26032e')
           .then(user => console.log('user retrieved', user))
           .catch(error => console.error(error))
   } catch (error) {
       console.error(error)
   }
})
    