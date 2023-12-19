import { JWT } from '../utils'
import validate from './validate'
import context from './context'

function loginUser(email, password, callback) {
    validate.email(email)
    validate.password(password)
    validate.funktion(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    fetch('http://localhost:4000/users/authenticate', req)
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