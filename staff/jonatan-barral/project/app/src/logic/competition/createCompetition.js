import { validate } from '../helpers'
import context from '../context'
import errors, { SystemError, ClearanceError } from '../errors'

function createCompetition(startdate, enddate, location, callback) {
    validate.date(startdate, 'startdate')
    validate.date(enddate, 'enddate')
    validate.text(location, 'location')
    validate.function(callback, 'callback')
    validate.jwt(context.jwt)

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${context.storage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ startdate, enddate, location })
    }

    fetch(`${import.meta.env.VITE_API_URL}/competition`, req)
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

export default createCompetition