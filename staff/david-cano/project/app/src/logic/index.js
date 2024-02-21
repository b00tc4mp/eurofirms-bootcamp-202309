import getLoggedInUserId from './getLoggedInUserId'
import isUserLoggedIn from './isUserLoggedIn'
import loginUser from './loginUser'
import registerUser from './registerUser'
import retrieveUser from './retrieveUser'
import logoutUser from './logoutUser'
import retrieveProducts from './retrieveProducts'
import addCartItem from './addCartItem'
import retrieveCartItems from './retrieveCartItems'

const logic = {
    getLoggedInUserId,
    isUserLoggedIn,
    loginUser,
    registerUser,
    retrieveUser,
    logoutUser,
    retrieveProducts,
    addCartItem,
    retrieveCartItems
}

export default logic