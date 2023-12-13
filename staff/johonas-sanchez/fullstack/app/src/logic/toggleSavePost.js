import { validateText, validateFunction } from '../utils/validators'
import db from '../data/managers'

function toggleSavePost(token, postId, callback) {
    validateText(token, 'token')
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    fetch(`http://localhost:4000/posts/${postId}/saved`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.error)))
                    .catch(error => callback(error))

                return
            }

            callback(null)
        })
        .catch(error => callback(error))
}

export default toggleSavePost