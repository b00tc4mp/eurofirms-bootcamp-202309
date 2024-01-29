const registerUser = require('./registerUser')
const retrieveUser = require('./retrieveUser')
const authenticateUser = require('./authenticateUser')
const createParking = require('./createParking')
const retrieveParkings = require('./retrieveParkings')
const retrieveParking = require('./retrieveParking')
const toggleSaveParking = require('./toggleSaveParking')
const createReview = require('./createReview')
const toggleConfirmParking = require('./toggleConfirmParking')
const retrieveReview = require('./retrieveReview')
const retrieveReviews = require('./retrieveReviews')
const deleteReview = require('./deleteReview')
const deleteParking = require('./deleteParking')
const retrieveSavedParkings = require('./retrieveSavedParkings')
const retrieveParkingsByGeo = require('./retrieveParkingsByGeo')
const updateUserEmail = require('./updateUserEmail')
const updateUserPassword = require('./updateUserPassword')

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createParking,
    retrieveParkings,
    retrieveParking,
    toggleSaveParking,
    createReview,
    toggleConfirmParking,
    retrieveReview,
    retrieveReviews,
    deleteReview,
    deleteParking,
    retrieveSavedParkings,
    retrieveParkingsByGeo,
    updateUserEmail,
    updateUserPassword
}

module.exports = logic