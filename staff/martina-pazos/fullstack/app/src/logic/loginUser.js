import { JWT } from '../utils'
import { validate } from './helpers'
import context from './context'

function loginUser(email, password, callback) {
    validate.email(email)
    validate.password(password)
    validate.function(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    fetch('${import.meta.env.VITE_API_URL}/users/auth', req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.error)))
                    .catch(error => callback(error))

                return
            }

            res.json()
                .then(token => {
                    context.storage.token = token
                    context.jwt = new JWT(token)

                    callback(null)
                })
                .catch(error => callback(error))
        })
        .catch(error => console.error(error))
}

export default loginUser