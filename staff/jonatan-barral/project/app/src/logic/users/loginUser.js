import { JWT } from '../../utils'
import { validate } from '../helpers'
import context from '../context'
import errors, { SystemError, CredentialsError } from '../errors'

function loginUser(username, password, callback) {
    validate.text(username)
    validate.password(password)
    validate.function(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/auth`, req)
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
                .then(token => {
                    context.storage.token = token
                    context.jwt = new JWT(token)

                    callback(null)
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

export default loginUser