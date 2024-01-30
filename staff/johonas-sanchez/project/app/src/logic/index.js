import getLoggedInUserId from "./geLoggedInUserId"
import isUserLoggedIn from "./isUserLoggedIn"
import isUserManager from "./isUserManager"
import isUserRegular from "./isUserRegular"
import loginUser from "./loginUser"
import logoutUser from "./logoutUser"
import retrieveUser from "./retrieveUser"
import registerUser from "./registerUser"
import retrieveParkings from "./retrieveParkings"
import retrieveParking from "./retrieveParking"
import retrieveReviews from "./retrieveReviews"
import updateUserEmail from "./updateUserEmail"
import updateUserPassword from "./updateUserPassword"
import retrieveParkingsByGeo from "./retrieveParkingsByGeo"
import retrieveSavedParkings from "./retrieveSavedParkings"
import toggleSaveParking from "./toggleSaveParking"
import toggleConfirmParking from "./toggleConfirmParking"
import deleteReview from "./deleteReview"
import createReview from "./createReview"
import createParking from "./createParking"
import deleteParking from "./deleteParking"

const logic = {
   getLoggedInUserId,
   isUserLoggedIn,
   isUserManager,
   isUserRegular,
   loginUser,
   logoutUser,
   retrieveUser, 
   registerUser,
   retrieveParkings,
   retrieveParking,
   retrieveReviews, 
   updateUserEmail,
   updateUserPassword,
   retrieveParkingsByGeo,
   retrieveSavedParkings, 
   toggleSaveParking,
   toggleConfirmParking,
   deleteReview, 
   createReview,
   createParking,
   deleteParking,
}

export default logic
