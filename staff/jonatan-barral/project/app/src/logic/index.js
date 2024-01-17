import getLoggedInUserId from './users/getLoggedInUserId'
import isUserLoggedIn from './users/isUserLoggedIn'
import loginUser from './users/loginUser'
import logoutUser from './users/logoutUser'
import retrieveUser from './users/retrieveUser'
import isUserAdmin from './users/isUserAdmin'
import isUserSecretaria from './users/isUserSecretaria'
import isUserJuezC from './users/isUserJuezC'
import isUserJuez from './users/isUserJuez'
import registerUser from './users/registerUser'

const logic = {
    getLoggedInUserId,
    isUserLoggedIn,
    loginUser,
    logoutUser,
    retrieveUser,
    isUserAdmin,
    isUserSecretaria,
    isUserJuezC,
    isUserJuez,
    registerUser
}

export default logic