const authenticateUserHandler = require('./authenticate-user-handler')
const registerUserHandler = require('./register-user-handler')
const retrieveUserHandler = require('./retrieve-user-handler')
const createParkingHandler = require('./create-parking-handler')
const retrieveParkingsHandler = require('./retrieve-parkings-handler')


module.exports = {
    authenticateUserHandler,
    registerUserHandler,
    retrieveUserHandler,
    createParkingHandler,
    retrieveParkingsHandler
}