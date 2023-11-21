import { validateText } from "../utils/validators"
import db from "../data/managers"

function deletePost(userId, postId) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('user not found')

    const post = db.findPostById(postId)
    if (!post)
        throw new Error('Post not found')

    if (post.author !== userId)
        throw new Error('Post does not belong to user')

    db.removePostById(postId)
}

export default deletePost