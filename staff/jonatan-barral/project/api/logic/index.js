const registerUser = require('./users/registerUser')
const authenticateUser = require('./users/authenticateUser')
const retrieveUser = require('./users/retrieveUser')
const retrieveUsers = require('./users/retrieveUsers')

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    retrieveUsers
}

module.exports = logic