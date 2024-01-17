const registerUser = require('./users/registerUser')
const authenticateUser = require('./users/authenticateUser')
const retrieveUser = require('./users/retrieveUser')
const retrieveSecretaries = require('./users/retrieveSecretaries')

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    retrieveSecretaries
}

module.exports = logic