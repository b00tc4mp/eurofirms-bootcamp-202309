import { validate } from '../helpers'
import context from '../context'
import errors, { SystemError, CredentialsError, ClearanceError } from '../errors'

function updateUserPasswordStarting(password, newPassword, repeatNewPassword, callback) {
    try {
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

        fetch(`${import.meta.env.VITE_API_URL}/users/password/starting`, req)
            .then(res => {
                if (!res.ok) {
                    return res.json()
                        .then(body => {
                            const constructor = errors[body.error]
                            callback(new constructor(body.message))
                        })
                        .catch(error => {
                            callback(new SystemError(error.message))
                        })
                }

                callback(null)
            })
            .catch(error => {
                callback(new SystemError(error.message))
            })
    } catch (error) {
        callback(new SystemError(error.message))
    }
}

export default updateUserPasswordStarting