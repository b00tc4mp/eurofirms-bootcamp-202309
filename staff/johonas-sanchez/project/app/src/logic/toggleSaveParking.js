import { validate } from "./helpers"
import context from "./context"
import errors, { SystemError } from "./errors"

function toggleSaveParking(parkingId) {
   validate.text(parkingId, "parking id")
   validate.jwt(context.jwt)

   const req = {
      method: "PATCH",
      headers: {
         Authorization: `Bearer ${context.storage.token}`,
      },
   }

   return fetch(`${import.meta.env.VITE_API_URL}/parkings/${parkingId}/saved`, req)
      .then((res) => {
         if (!res.ok) {
            return res.json()
               .then((body) => {
                  const constructor = errors[body.error]
                  throw new constructor(body.message)
               })
               .catch((error) => {throw new SystemError(error.message)})
         }
      })
      .catch(error => {throw new SystemError(error.message)})
}

export default toggleSaveParking
