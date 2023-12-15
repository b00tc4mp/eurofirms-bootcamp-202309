import { validatePassword, validateEmail, validateFunction, validateJWT } from "../utils/validators"
import context from './context'

function updateUserEmail(password, email, newEmail, repeatNewEmail, callback) {
    validatePassword(password, "password")
    validateEmail(email, "email")
    validateEmail(newEmail, "new email")
    validateEmail(repeatNewEmail, "repeat new email")
    validateFunction(callback, "callback")
    validateJWT(context.jwt)

   const req = {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${context.storage.token}`
      },
      body: JSON.stringify({ password, email, newEmail, repeatNewEmail }),
   }

   fetch("http://localhost:4000/users/email", req)
      .then((res) => {
         if (!res.ok) {
            res.json()
               .then((body) => callback(new Error(body.error)))
               .catch((error) => callback(error))

            return
         }

         console.log("email updated")
      })
      .catch((error) => callback(error))
}

export default updateUserEmail