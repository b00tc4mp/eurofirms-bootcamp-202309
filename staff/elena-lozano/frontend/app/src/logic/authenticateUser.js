import { validateEmail, validatePassword } from "../utils/validators"
import db from "../data/managers"


//Este archivo depende de validateEmail, de validatePassword y de db
function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    const user = db.findUserByEmail(email)

    if (!user)
        throw new Error("Wrong credentials")

    if (user.password !== password)
        throw new Error("Wrong credentials")

    return user.id
}
export default authenticateUser