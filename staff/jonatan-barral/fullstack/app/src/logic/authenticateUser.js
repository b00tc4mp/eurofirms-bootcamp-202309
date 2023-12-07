import { validateEmail, validatePassword } from '../utils/validators'

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    fetch('http://localhost:4000/users/auth', req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => console.error(body))
                    .catch(error => console.error(error.message))

                return
            }

            res.json()
                .then(body => console.log('user authenticated', body))
                .catch(error => console.error(error))
        })
        .catch(error => console.error(error))
}

export default authenticateUser