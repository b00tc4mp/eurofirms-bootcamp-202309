const authenticateUserHandler = require('./authenticate-user-handler')
const registerUserHandler = require('./register-user-handler')
const retrieveUserHandler = require('./retrieve-user-handler')
const retrieveJudgesHandler = require('./retrieve-judges-handler')


module.exports = {
    authenticateUserHandler,
    registerUserHandler,
    retrieveUserHandler,
    retrieveJudgesHandler
}