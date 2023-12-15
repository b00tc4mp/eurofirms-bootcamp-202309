import { validatePassword, validateFunction, validateJWT } from "../utils/validators"
import context from './context'

function updateUserPassword(password, newPassword, repeatNewPassword, callback) {
    validatePassword(password, "password")
    validatePassword(newPassword, "new password")
    validatePassword(repeatNewPassword, "repeat new password")
    validateFunction(callback, "callback")
    validateJWT(context.jwt)

   const req = {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${context.storage.token}`
      },
      body: JSON.stringify({ password, newPassword, repeatNewPassword }),
   }

   fetch("http://localhost:4000/users/password", req)
      .then((res) => {
         if (!res.ok) {
            res.json()
               .then((body) => console.error(body))
               .catch((error) => console.error(error))

            return
         }

         console.log("password updated")
      })
      .catch((error) => console.error(error))
}

export default updateUserPassword
