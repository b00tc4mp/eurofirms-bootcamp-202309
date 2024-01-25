import getLoggedInUserId from './users/getLoggedInUserId'
import isUserLoggedIn from './users/isUserLoggedIn'
import loginUser from './users/loginUser'
import logoutUser from './users/logoutUser'
import retrieveUser from './users/retrieveUser'
import isUserAdmin from './users/role/isUserAdmin'
import isUserSecretaria from './users/role/isUserSecretaria'
import isUserJuezC from './users/role/isUserJuezC'
import isUserJuez from './users/role/isUserJuez'
import registerUser from './users/registerUser'
import retrieveJudges from './users/retrieveJudges'
import retrieveSecretaries from './users/retrieveSecretaries'
import isUserStarting from './users/status/isUserStarting'
import isUserActivated from './users/status/isUserActivated'
import isUserDeactivated from './users/status/isUserDeactivated'
import updateUserPasswordStarting from './users/updateUserPasswordStarting'

const logic = {
    getLoggedInUserId,
    isUserLoggedIn,
    loginUser,
    logoutUser,
    retrieveUser,
    isUserActivated,
    isUserStarting,
    isUserDeactivated,
    isUserAdmin,
    isUserSecretaria,
    isUserJuezC,
    isUserJuez,
    registerUser,
    retrieveJudges,
    retrieveSecretaries,
    updateUserPasswordStarting
}

export default logic