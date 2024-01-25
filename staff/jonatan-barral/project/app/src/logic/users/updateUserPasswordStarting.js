import { validate } from '../helpers'
import context from '../context'
import errors, { SystemError, CredentialsError, ClearanceError } from '../errors'

function updateUserPasswordStarting(password, newPassword, repeatNewPassword) {
    validate.password(password, "password")
    validate.password(newPassword, "new password")
    validate.password(repeatNewPassword, "repeat new password")
    validate.jwt(context.jwt)

    const req = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.storage.token}`,
        },
        body: JSON.stringify({ password, newPassword, repeatNewPassword }),
    }

    return fetch(`${import.meta.env.VITE_API_URL}/users/password/starting`, req)
        .then((res) => {
            if (!res.ok) {
                return res
                    .json()
                    .then((body) => {
                        const constructor = errors[body.error]
                        throw new constructor(body.message)
                    })
                    .catch((error) => {
                        throw new SystemError(error.message)
                    })
            }
        })
        .catch((error) => {
            throw new SystemError(error.message)
        })
}

export default updateUserPasswordStarting