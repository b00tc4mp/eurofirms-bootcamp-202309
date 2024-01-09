// Importamos la función de validación, el contexto y los errores personalizados
import { validate } from './helpers'
import context from './context'
import errors, { SystemError } from './errors'

// Definimos una función llamada retrieveMyPosts que recibe una función de devolución de llamada (callback)
function retrieveMyPosts(callback) {
    // Validamos que la devolución de llamada sea una función
    validate.function(callback, 'callback')
    // Validamos que haya un token JWT en el contexto
    validate.jwt(context.jwt)

    // Creamos una solicitud (request) con el método GET y la cabecera (header) de autorización que contiene el token JWT
    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${context.storage.token}`,
        },
    }

    // Realizamos una solicitud al servidor para obtener los posts del usuario actual
    fetch(`${import.meta.env.VITE_API_URL}/posts/mine`, req)
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

            // Si la respuesta es exitosa, procesamos el cuerpo JSON para obtener los posts
            res.json()
                .then(posts => callback(null, posts)) // Llamamos a la devolución de llamada con los posts obtenidos
                .catch(error => callback(new SystemError(error.message))) // Manejamos posibles errores en el procesamiento del cuerpo JSON
        })
        .catch(error => callback(new SystemError(error.message))) // Manejamos posibles errores en la solicitud
}

// Exportamos la función retrieveMyPosts para que pueda ser utilizada en otras partes del código
export default retrieveMyPosts
