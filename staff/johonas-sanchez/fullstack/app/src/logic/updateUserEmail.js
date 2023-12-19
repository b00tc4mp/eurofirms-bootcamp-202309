import validate from './validate'
import context from "./context"

function updateUserEmail(password, email, newEmail, repeatNewEmail, callback) {
   validate.password(password, "password")
   validate.email(email, "email")
   validate.email(newEmail, "new email")
   validate.email(repeatNewEmail, "repeat new email")
   validate.funktion(callback, "callback")
   validate.jwt(context.jwt)

   const req = {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${context.storage.token}`,
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
         
         callback(null)
      })
      .catch((error) => callback(error))
}

export default updateUserEmail
