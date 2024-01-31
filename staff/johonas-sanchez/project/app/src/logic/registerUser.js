import { validate } from './helpers'
import errors, { SystemError } from './errors'

function registerUser(name, email, password, role) {
    validate.text(name, 'name')
    validate.text(role, 'role')
    validate.email(email)
    validate.password(password)

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, role})
    }
    
    return fetch(`${import.meta.env.VITE_API_URL}/users`, req)
        .then(res => {
            if (!res.ok) {
                return res.json()
                .then(body => {
                    const constructor = errors[body.error]
                    throw new constructor(body.message)
                })
                .catch(error => {throw new SystemError(error.message)})
            }
        })
        .catch(error => {throw new SystemError(error.message)})
}

export default registerUser