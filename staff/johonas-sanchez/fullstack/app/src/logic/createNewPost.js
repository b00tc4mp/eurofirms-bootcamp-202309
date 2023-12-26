import { validate } from './helpers'
import context from './context'
import errors, { SystemError } from './errors'

function createNewPost(image, imageDescription, text, callback) {
    validate.url(image, 'image url')
    validate.text(imageDescription, 'image description')
    validate.text(text, 'text')
    validate.function(callback, 'callback')
    validate.jwt(context.jwt)

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${context.storage.token}`,
        },
        body: JSON.stringify({ image, imageDescription, text })
    }

    fetch(`${import.meta.env.VITE_API_URL}/posts`, req)
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

            console.log(res.status, 'created')
            callback(null)
        })
        .catch(error => callback(new SystemError(error.message)))
}

export default createNewPost