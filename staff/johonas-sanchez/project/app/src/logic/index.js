import isUserLoggedIn from "./isUserLoggedIn"
import loginUser from "./loginUser"
import logoutUser from "./logoutUser"
import retrieveUser from "./retrieveUser"
import registerUser from "./registerUser"
import retrieveParkings from "./retrieveParkings"
import updateUserEmail from "./updateUserEmail"
import updateUserPassword from "./updateUserPassword"

const logic = {
   isUserLoggedIn,
   loginUser,
   logoutUser,
   retrieveUser, 
   registerUser,
   retrieveParkings, 
   updateUserEmail,
   updateUserPassword
}

export default logic
