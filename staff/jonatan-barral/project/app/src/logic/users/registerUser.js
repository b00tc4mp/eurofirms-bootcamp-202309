import { validate } from './helpers'
import context from '../context'
import errors, { SystemError, ClearanceError } from '../errors'

function registerUser(name, username, password, role, callback) {
    validate.text(name, 'name')
    validate.text(username)
    validate.password(password)
    validate.role(role)
    validate.function(callback, 'callback')
    validate.jwt(context.jwt)

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${context.storage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, username, password, role })
    }

    fetch(`${import.meta.env.VITE_API_URL}/users`, req)
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

export default registerUser