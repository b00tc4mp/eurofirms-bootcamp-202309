// Importamos la función de validación y los errores personalizados
import { validate } from './helpers'
import errors, { SystemError } from './errors'

// Definimos una función llamada registerUser que recibe un nombre, un correo electrónico, una contraseña y una función de devolución de llamada (callback)
function registerUser(name, email, password, callback) {
    // Validamos que el nombre sea un texto no vacío
    validate.text(name, 'name')
    // Validamos que el correo electrónico sea válido
    validate.email(email)
    // Validamos que la contraseña cumpla con los requisitos
    validate.password(password)
    // Validamos que la devolución de llamada sea una función
    validate.function(callback, 'callback')

    // Creamos una solicitud (request) con el método POST y el cuerpo (body) en formato JSON con los datos del nuevo usuario
    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    }

    // Realizamos una solicitud de registro al servidor
    fetch(`${import.meta.env.VITE_API_URL}/users`, req)
        .then(res => {
            // Verificamos si la respuesta es exitosa (código de estado 2xx)
            if (!res.ok) {
                // Si la respuesta no es exitosa, procesamos el cuerpo JSON para obtener detalles del error
                res.json()
                    .then(body => {
                        // Creamos una instancia del error correspondiente utilizando la información del servidor
                        const constructor = errors[body.error]

                        // Llamamos a la devolución de llamada con el error creado
                        callback(new constructor(body.message))
                    })
                    .catch(error => callback(new SystemError(error.message))) // Manejamos posibles errores en el procesamiento del cuerpo JSON
                return
            }

            // Si la respuesta es exitosa, llamamos a la devolución de llamada con null para indicar que no hay error
            callback(null)
        })
        .catch(error => callback(new SystemError(error.message))) // Manejamos posibles errores en la solicitud
}

// Exportamos la función registerUser para que pueda ser utilizada en otras partes del código
export default registerUser
