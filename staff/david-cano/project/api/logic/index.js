const registerUser = require('./registerUser')
const retrieveUser = require('./retrieveUser')
const authenticateUser = require('./authenticateUser')

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser
}

module.exports = logic