import validate from './validate'
import context from './context'

function createNewPost(image, imageDescription, text, callback) {
    validate.url(image, 'image url')
    validate.text(imageDescription, 'image description')
    validate.text(text, 'text')
    validate.funktion(callback, 'callback')
    validate.jwt(context.jwt)

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${context.storage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, imageDescription, text })
    }

    fetch('http://localhost:4000/posts', req)
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

export default createNewPost