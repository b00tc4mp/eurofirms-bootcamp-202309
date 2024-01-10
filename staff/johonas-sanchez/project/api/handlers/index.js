const authenticateUserHandler = require("./authenticate-user-handler")
const registerUserHandler = require("./register-user-handler")
const retrieveUserHandler = require("./retrieve-user-handler")
const createParkingHandler = require("./create-parking-handler")
const retrieveParkingsHandler = require("./retrieve-parkings-handler")
const retrieveParkingHandler = require("./retrieve-parking-handler")
const toggleSaveParkingHandler = require("./toggle-save-parking-handler")
const createParkingReviewHandler = require("./create-parking-review-handler")
const toggleConfirmParkingHandler = require("./toggle-confirm-parking-handler")

module.exports = {
   authenticateUserHandler,
   registerUserHandler,
   retrieveUserHandler,
   createParkingHandler,
   retrieveParkingsHandler,
   retrieveParkingHandler,
   toggleSaveParkingHandler,
   createParkingReviewHandler,
   toggleConfirmParkingHandler,
}
