import { validateText } from '../utils/validators'
import db from '../data/managers'


function toggleSavePost(userId, postId) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('User not found')

    const post = db.findPostById(postId)

    if (!post)
        throw new Error('Post not found')

    const index = user.saved.indexOf(postId)

    if (index < 0)
        user.saved.push(postId)

    else
        user.saved.splice(index, 1)

    db.updateUser(user)
}
export default toggleSavePost