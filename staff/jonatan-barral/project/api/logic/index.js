const registerUser = require('./users/registerUser')
const authenticateUser = require('./users/authenticateUser')
const retrieveUser = require('./users/retrieveUser')
const retrieveJudges = require('./users/retrieveJudges')
const retrieveSecretaries = require('./users/retrieveSecretaries')

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    retrieveJudges,
    retrieveSecretaries
}

module.exports = logic