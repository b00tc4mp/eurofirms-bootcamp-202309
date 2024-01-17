const authenticateUserHandler = require('./authenticate-user-handler')
const registerUserHandler = require('./register-user-handler')
const retrieveUserHandler = require('./retrieve-user-handler')
const retrieveSecretariesHandler = require('./retrieve-secretaries-handler')


module.exports = {
    authenticateUserHandler,
    registerUserHandler,
    retrieveUserHandler,
    retrieveSecretariesHandler
}