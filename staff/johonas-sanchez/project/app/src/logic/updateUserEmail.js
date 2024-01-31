import { validate } from "./helpers"
import context from "./context"
import errors, { SystemError } from "./errors"

function updateUserEmail(password, email, newEmail, repeatNewEmail) {
   validate.password(password, "password")
   validate.email(email, "email")
   validate.email(newEmail, "new email")
   validate.email(repeatNewEmail, "repeat new email")
   validate.jwt(context.jwt)

   const req = {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${context.storage.token}`,
      },
      body: JSON.stringify({ password, email, newEmail, repeatNewEmail }),
   }

   return fetch(`${import.meta.env.VITE_API_URL}/users/email`, req)
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
      .catch(error => {throw new SystemError(error.message)})
}

export default updateUserEmail
