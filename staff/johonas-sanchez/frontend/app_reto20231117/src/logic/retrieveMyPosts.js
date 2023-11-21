import { validateText } from '../utils/validators';
import db from '../data/managers';

function retrieveMyPosts(userId) {
    validateText(userId, 'user id')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('User not found')

        const posts = db.getPosts().reverse().filter(function (post) {
            return post.author === user.id
        })

    posts.forEach(function (post) {

        post.author = {
            id: user.id,
            name: user.name
        }

        post.liked = post.likes.includes(userId)

        post.saved = user.saved.includes(post.id)
    })

    return posts
}

export default retrieveMyPosts;