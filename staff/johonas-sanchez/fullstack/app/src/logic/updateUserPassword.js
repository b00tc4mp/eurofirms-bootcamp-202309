import { validateText, validateFunction } from "../utils/validators"

function updateUserPassword(token, password, newPassword, repeatNewPassword, callback) {
    validateText(token, "token")
    validatePassword(password, "password")
    validatePassword(newPassword, "new password")
    validatePassword(repeatNewPassword, "repeat new password")
    validateFunction(callback, "callback")

   const req = {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`
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

         console.log(res.status, "updated password")
      })
      .catch((error) => console.error(error))
}

export default updateUserPassword
