const registerUser = require('./registerUser')
const retrieveUser = require('./retrieveUser')
const authenticateUser = require('./authenticateUser')
const createParking = require('./createParking')
const retrieveParkings = require('./retrieveParkings')
const retrieveParking = require('./retrieveParking')
const toggleSaveParking = require('./toggleSaveParking')
const createParkingReview = require('./createParkingReview')
const toggleConfirmParking = require('./toggleConfirmParking')

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createParking,
    retrieveParkings,
    retrieveParking,
    toggleSaveParking,
    createParkingReview,
    toggleConfirmParking
}

module.exports = logic