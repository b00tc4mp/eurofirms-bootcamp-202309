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
const deleteReview = require('./deleteReview')

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
    deleteReview,
}

module.exports = logic