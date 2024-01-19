const registerUser = require('./users/registerUser')
const authenticateUser = require('./users/authenticateUser')
const retrieveUser = require('./users/retrieveUser')
const retrieveJudges = require('./users/retrieveJudges')

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    retrieveJudges
}

module.exports = logic