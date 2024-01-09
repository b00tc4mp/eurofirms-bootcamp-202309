// Importamos la función de validación, el contexto y los errores personalizados
import { validate } from "./helpers"
import context from "./context"
import errors, { SystemError } from "./errors"

// Definimos la función updateUserPassword que recibe la contraseña actual, la nueva contraseña, la repetición de la nueva contraseña y una función de devolución de llamada (callback)
function updateUserPassword(password, newPassword, repeatNewPassword, callback) {
   // Validamos que la contraseña actual, la nueva contraseña y la repetición de la nueva contraseña sean válidas
   validate.password(password, "password")
   validate.password(newPassword, "new password")
   validate.password(repeatNewPassword, "repeat new password")
   // Validamos que la devolución de llamada sea una función y que haya un token JWT en el contexto
   validate.function(callback, "callback")
   validate.jwt(context.jwt)

   // Creamos una solicitud (request) con el método PATCH, la cabecera (header) de autorización que contiene el token JWT y el cuerpo (body) en formato JSON con la información a actualizar
   const req = {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${context.storage.token}`,
      },
      body: JSON.stringify({ password, newPassword, repeatNewPassword }),
   }

   // Realizamos una solicitud al servidor para actualizar la contraseña del usuario
   fetch(`${import.meta.env.VITE_API_URL}/users/password`, req)
      .then((res) => {
         // Verificamos si la respuesta no es exitosa (código de estado diferente de 2xx)
         if (!res.ok) {
            // Procesamos el cuerpo JSON para obtener detalles del error y llamamos a la devolución de llamada con el error correspondiente
            res.json()
               .then((body) => {
                  const constructor = errors[body.error]

                  callback(new constructor(body.message))
               })
               .catch((error) => callback(new SystemError(error.message)))
            return
         }

         // Llamamos a la devolución de llamada sin errores si la respuesta es exitosa
         callback(null)
      })
      .catch((error) => callback(new SystemError(error.message))) // Manejamos posibles errores en la solicitud
}

// Exportamos la función updateUserPassword para que pueda ser utilizada en otras partes del código
export default updateUserPassword
