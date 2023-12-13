import { validateText, validateFunction } from '../utils/validators';


function retrieveUser(token, callback) {
    validateText(token, 'token')
    validateFunction(callback, 'callback')

    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    fetch('http://localhost:4000/users', req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.error)))
                    .catch(error => callback(error))

                return
            }

            res.json()
                .then(body => callback(null, body))
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
}

export default retrieveUser;