import isUserLoggedIn from "./isUserLoggedIn"
import loginUser from "./loginUser"
import logoutUser from "./logoutUser"
import retrieveUser from "./retrieveUser"
import registerUser from "./registerUser"
import retrieveParkings from "./retrieveParkings"
import retrieveParking from "./retrieveParking"
import updateUserEmail from "./updateUserEmail"
import updateUserPassword from "./updateUserPassword"
import retrieveParkingsByGeo from "./retrieveParkingsByGeo"
import retrieveSavedParkings from "./retrieveSavedParkings"

const logic = {
   isUserLoggedIn,
   loginUser,
   logoutUser,
   retrieveUser, 
   registerUser,
   retrieveParkings,
   retrieveParking, 
   updateUserEmail,
   updateUserPassword,
   retrieveParkingsByGeo,
   retrieveSavedParkings
}

export default logic
