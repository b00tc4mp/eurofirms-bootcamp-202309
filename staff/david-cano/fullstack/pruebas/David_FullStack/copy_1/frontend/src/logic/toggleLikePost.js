import { validateText } from '../utils/validators'
import db from '../data/managers'

function toggleLikePost(userId, postId) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('User not found')

    const post = db.findPostById(postId)

    if (!post)
        throw new Error('Post not found')

    const index = post.likes.indexOf(userId)

    if (index < 0)
        post.likes.push(userId)
    else
        post.likes.splice(index, 1)

    db.updatePost(post)
}

export default toggleLikePost