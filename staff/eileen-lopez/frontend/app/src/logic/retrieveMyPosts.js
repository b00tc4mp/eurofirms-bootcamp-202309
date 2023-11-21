import { validateText } from '../utils/validators'
import db from '../data/managers'

function retrieveMyPosts(userId) {
    validateText(userId, 'user id')
}