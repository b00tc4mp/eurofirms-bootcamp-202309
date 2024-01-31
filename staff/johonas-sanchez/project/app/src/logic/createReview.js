import { validate } from "./helpers"
import context from "./context"
import errors, { SystemError } from "./errors"

function createReview(comment, valuation, parkingId) {
   validate.text(comment, "comment")
   validate.number(valuation, "valuation")
   validate.jwt(context.jwt)

   const req = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${context.storage.token}`,
      },
      body: JSON.stringify({ comment, valuation }),
   }

   return fetch(`${import.meta.env.VITE_API_URL}/parkings/${parkingId}/reviews`, req)
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

export default createReview
