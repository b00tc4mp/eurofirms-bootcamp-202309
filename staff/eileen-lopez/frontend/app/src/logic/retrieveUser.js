import { validateText } from '../utils/validators'
import db from '../data/managers'

function retrieveUser(userId) {
    validateText(userId, 'user id')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error ('Wrong credentials')

    return user
}

export default retrieveUser