import { validate } from './helpers'
import context from './context'

function toggleSavePost(postId, callback) {
    validate.text(postId, 'post id')
    validate.function(callback, 'callback')
    validate.jwt(context.jwt)

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: 'Bearer ${context.storage.token}'
        }
    }

    fetch('${import.meta.env.VITE_API_URL}/posts/${postId}/saved', req)
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