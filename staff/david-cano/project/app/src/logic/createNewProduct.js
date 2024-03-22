import { validate } from './helpers'
import context from './context'
import errors, { SystemError } from './errors'

function createNewProduct(name, img, description, price, callback) {
    validate.text(name, 'name')
    validate.url(img, 'img url')
    validate.text(description, 'description')
    validate.text(price, 'price')
    validate.function(callback, 'callback')
    validate.jwt(context.jwt)

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${context.storage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, img, description, price })
    }

    fetch(`${import.meta.env.VITE_API_URL}/products`, req)
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

export default createNewProduct