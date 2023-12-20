import { validate } from './helpers'
import context from './context'

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
                    .then(body => callback(new Error(body.error)))
                    .catch(error => callback(error))

                return
            }

            console.log(res.status, 'created')
            callback(null)
        })
        .catch(error => callback(error))
}

export default createNewPost