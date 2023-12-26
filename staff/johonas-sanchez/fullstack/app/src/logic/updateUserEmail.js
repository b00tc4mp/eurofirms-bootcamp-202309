import { validate } from './helpers'
import context from "./context"
import errors, { SystemError } from './errors'

function updateUserEmail(password, email, newEmail, repeatNewEmail, callback) {
   validate.password(password, "password")
   validate.email(email, "email")
   validate.email(newEmail, "new email")
   validate.email(repeatNewEmail, "repeat new email")
   validate.function(callback, "callback")
   validate.jwt(context.jwt)

   const req = {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${context.storage.token}`,
      },
      body: JSON.stringify({ password, email, newEmail, repeatNewEmail }),
   }

   fetch(`${import.meta.env.VITE_API_URL}/users/email`, req)
      .then((res) => {
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

export default updateUserEmail
