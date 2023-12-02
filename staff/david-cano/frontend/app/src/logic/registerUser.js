import { validateText, validateEmail, validatePassword } from "../utils/validators"
import db from "../data/managers"

function registerUser(name, email, password) {
    validateText(name, 'name')
    validateEmail(email)
    validatePassword(password)

    const user = db.findUserByEmail(email)

    if (user)
        throw new Error('User already exists')

    db.createUser(name, email, password)
}

export default registerUser