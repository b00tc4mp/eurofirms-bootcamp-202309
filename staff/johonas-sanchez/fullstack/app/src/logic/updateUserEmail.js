import { validateEmail, validateFunction } from "../utils/validators"
import context from './context'

function updateUserEmail(password, email, newEmail, repeatNewEmail, callback) {
    validatePassword(password, "password")
    validateEmail(email, "email")
    validateEmail(newEmail, "new email")
    validateEmail(repeatNewEmail, "repeat new email")
    validateFunction(callback, "callback")

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
               .then((body) => console.error(body))
               .catch((error) => console.error(error))

            return
         }

         console.log(res.status, "updated email")
      })
      .catch((error) => console.error(error))
}

export default updateUserEmail