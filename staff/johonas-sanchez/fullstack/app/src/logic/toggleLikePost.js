import { validate } from './helpers'
import context from './context'
import errors, { SystemError } from './errors'

function toggleLikePost(postId, callback) {
    validate.text(postId, 'post id')
    validate.function(callback, 'callback')
    validate.jwt(context.jwt)

    const req = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${context.storage.token}`
        }
    }

    fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}/likes`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                .then(body => {
                    const constructor = errors[body.error]

                    callback(new constructor(body.message))
                })
                .catch(error => callback(new SystemError(error.message)))

                return
            }

            callback(null)
        })
        .catch(error => callback(new SystemError(error.message)))
}

export default toggleLikePost