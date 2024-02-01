import { validate } from '../helpers'
import context from '../context'
import errors, { SystemError, ClearanceError } from '../errors'

function retrieveSecretaries(callback) {
    validate.function(callback, 'callback')
    validate.jwt(context.jwt)

    const req = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${context.storage.token}`,
        },
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/secretaries`, req)
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

            res.json()
                .then(judges => callback(null, judges))
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

export default retrieveSecretaries