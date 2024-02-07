import { validate } from './helpers'
import errors, { SystemError } from './errors'


function registerUser(name, email, password, role, callback) {
    validate.text(name, 'name')
    validate.email(email)
    validate.password(password)
    validate.text(role, 'role')
    validate.function(callback, 'callback')

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, role })
    }

    fetch(`${import.meta.env.VITE_API_URL}/users`, req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => {
                        console.log(body); 
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