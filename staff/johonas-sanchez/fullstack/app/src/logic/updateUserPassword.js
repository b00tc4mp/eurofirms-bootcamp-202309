import { validate } from './helpers'
import context from "./context"

function updateUserPassword(password, newPassword, repeatNewPassword, callback) {
   validate.password(password, "password")
   validate.password(newPassword, "new password")
   validate.password(repeatNewPassword, "repeat new password")
   validate.function(callback, "callback")
   validate.jwt(context.jwt)

   const req = {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${context.storage.token}`,
      },
      body: JSON.stringify({ password, newPassword, repeatNewPassword }),
   }

   fetch(`${import.meta.env.VITE_API_URL}/users/password`, req)
      .then((res) => {
         if (!res.ok) {
            res.json()
               .then((body) => callback(new Error(body.error)))
               .catch((error) => callback(error))

            return
         }

         callback(null)
      })
      .catch((error) => callback(error))
}

export default updateUserPassword
