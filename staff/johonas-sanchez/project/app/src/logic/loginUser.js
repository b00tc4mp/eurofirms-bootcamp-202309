import { JWT } from "../utils"
import { validate } from "./helpers"
import context from "./context"
import errors, { SystemError } from "./errors"

function loginUser(email, password) {
   validate.email(email)
   validate.password(password)

   const req = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
   }

   return fetch(`${import.meta.env.VITE_API_URL}/users/auth`, req)
      .then((res) => {
         if (!res.ok) {
            return res.json()
            .then((body) => {
               const constructor = errors[body.error]
               throw new constructor(body.message)
            })
            .catch(error => {throw new SystemError(error.message)})
         }

         return res
            .json()
            .then((token) => {
               context.storage.token = token
               context.jwt = new JWT(token)
            })
            .catch((error) => {
               throw new SystemError(error.message)
            })
      })
      .catch((error) => {
         throw new SystemError(error.message)
      })
}

export default loginUser
