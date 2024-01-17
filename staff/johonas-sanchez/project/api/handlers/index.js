const authenticateUserHandler = require("./authenticate-user-handler")
const registerUserHandler = require("./register-user-handler")
const retrieveUserHandler = require("./retrieve-user-handler")
const createParkingHandler = require("./create-parking-handler")
const retrieveParkingsHandler = require("./retrieve-parkings-handler")
const retrieveParkingHandler = require("./retrieve-parking-handler")
const toggleSaveParkingHandler = require("./toggle-save-parking-handler")
const createReviewHandler = require("./create-review-handler")
const toggleConfirmParkingHandler = require("./toggle-confirm-parking-handler")
const retrieveReviewHandler = require("./retrieve-review-handler")
const deleteReviewHandler = require("./delete-review-handler")
const deleteParkingHandler = require("./delete-parking-handler")
const retrieveSavedParkingsHandler = require("./retrieve-saved-parkings-handler")
const retrieveParkingsByGeoHandler = require("./retrieve-parkings-by-geo-handler")
const updateUserEmailHandler = require("./update-user-email-handler")
const updateUserPasswordHandler = require("./update-user-password-handler")

module.exports = {
   authenticateUserHandler,
   registerUserHandler,
   retrieveUserHandler,
   createParkingHandler,
   retrieveParkingsHandler,
   retrieveParkingHandler,
   toggleSaveParkingHandler,
   createReviewHandler,
   toggleConfirmParkingHandler,
   retrieveReviewHandler,
   deleteReviewHandler,
   deleteParkingHandler,
   retrieveSavedParkingsHandler,
   retrieveParkingsByGeoHandler,
   updateUserEmailHandler,
   updateUserPasswordHandler,

}
