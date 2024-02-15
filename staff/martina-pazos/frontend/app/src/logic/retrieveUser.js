import { validateText } from '../utils/validators'
import db from '../data/managers'

function retrieveUser(userId) {
    validateText(userId, 'user id')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('User not found')

    return user
}

export default retrieveUser
