const registerUser = require('./registerUser')
const retrieveUser = require('./retrieveUser')
const authenticateUser = require('./authenticateUser')
const createParking = require('./createParking')

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createParking,
}

module.exports = logic