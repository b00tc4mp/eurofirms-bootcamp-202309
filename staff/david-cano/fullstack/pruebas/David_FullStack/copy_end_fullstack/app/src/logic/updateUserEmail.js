// Importamos la función de validación, el contexto y los errores personalizados
import { validate } from './helpers'
import context from "./context"
import errors, { SystemError } from './errors'

// Definimos la función updateUserEmail que recibe la contraseña actual, el email actual, el nuevo email, la repetición del nuevo email y una función de devolución de llamada (callback)
function updateUserEmail(password, email, newEmail, repeatNewEmail, callback) {
   // Validamos que la contraseña, el email actual, el nuevo email y la repetición del nuevo email sean válidos
   validate.password(password, "password")
   validate.email(email, "email")
   validate.email(newEmail, "new email")
   validate.email(repeatNewEmail, "repeat new email")
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
      body: JSON.stringify({ password, email, newEmail, repeatNewEmail }),
   }

   // Realizamos una solicitud al servidor para actualizar el email del usuario
   fetch(`${import.meta.env.VITE_API_URL}/users/email`, req)
      .then((res) => {
         // Verificamos si la respuesta no es exitosa (código de estado diferente de 2xx)
         if (!res.ok) {
            // Procesamos el cuerpo JSON para obtener detalles del error y llamamos a la devolución de llamada con el error correspondiente
            res.json()
            .then(body => {
               const constructor = errors[body.error]

               callback(new constructor(body.message))
           })
           .catch(error => callback(new SystemError(error.message)))

            return
         }
         
         // Llamamos a la devolución de llamada sin errores si la respuesta es exitosa
         callback(null)
      })
      .catch(error => callback(new SystemError(error.message))) // Manejamos posibles errores en la solicitud
}

// Exportamos la función updateUserEmail para que pueda ser utilizada en otras partes del código
export default updateUserEmail
