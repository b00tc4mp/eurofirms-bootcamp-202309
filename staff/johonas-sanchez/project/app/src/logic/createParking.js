import { validate } from "./helpers"
import context from "./context"
import errors, { SystemError } from "./errors"

function createParking(lat , long) {
   validate.number(lat, "latitud")
   validate.number(long, "longitud")
   validate.jwt(context.jwt)

   const req = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${context.storage.token}`,
      },
      body: JSON.stringify({ lat, long }),
   }

   return fetch(`${import.meta.env.VITE_API_URL}/parkings`, req)
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

export default createParking
