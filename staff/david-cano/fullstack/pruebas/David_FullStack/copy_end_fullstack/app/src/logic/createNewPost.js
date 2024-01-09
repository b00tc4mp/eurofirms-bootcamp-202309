// Importamos la herramienta 'validate' desde un lugar llamado './helpers'.
import { validate } from './helpers';

// Importamos el objeto 'context' desde un lugar llamado './context'.
import context from './context';

// Importamos los errores y el 'SystemError' desde un lugar llamado './errors'.
import errors, { SystemError } from './errors';

// Creamos una función llamada 'createNewPost' que acepta cuatro cosas: 'image', 'imageDescription', 'text' y 'callback'.
function createNewPost(image, imageDescription, text, callback) {
    // Usamos la herramienta 'validate' para asegurarnos de que 'image' sea una dirección web válida.
    validate.url(image, 'image url');
    // Usamos la herramienta 'validate' para asegurarnos de que 'imageDescription' tenga texto.
    validate.text(imageDescription, 'image description');
    // Usamos la herramienta 'validate' para asegurarnos de que 'text' tenga texto.
    validate.text(text, 'text');
    // Usamos la herramienta 'validate' para asegurarnos de que 'callback' sea una función.
    validate.function(callback, 'callback');
    // Usamos la herramienta 'validate' para asegurarnos de que hay un código secreto (JWT) almacenado en nuestro contexto.
    validate.jwt(context.jwt);

    // Creamos una solicitud (como pedir algo) que tiene información sobre lo que queremos hacer.
    const req = {
        method: 'POST', // Queremos enviar información nueva.
        headers: {
            Authorization: `Bearer ${context.storage.token}`, // Adjuntamos nuestro código secreto para que sepan que somos nosotros.
            'Content-Type': 'application/json' // Les decimos qué tipo de información estamos enviando (en este caso, es como enviar un mensaje especial).
        },
        // Convertimos la información que queremos enviar en un formato que todos puedan entender (como escribirlo de una manera especial).
        body: JSON.stringify({ image, imageDescription, text })
    };

    // Enviamos nuestra solicitud a un lugar especial en Internet donde pueden entender y procesar nuestras peticiones.
    fetch(`${import.meta.env.VITE_API_URL}/posts`, req)
        .then(res => {
            // Verificamos si la respuesta es correcta (si no hay problemas).
            if (!res.ok) {
                // Si hay un problema, leemos la respuesta y descubrimos qué tipo de problema es.
                res.json()
                    .then(body => {
                        // Usamos el tipo de error que recibimos para construir un error especial y lo pasamos a nuestra función de devolución de llamada.
                        const constructor = errors[body.error];
                        callback(new constructor(body.message));
                    })
                    .catch(error => callback(new SystemError(error.message))); // Si hay un error al leer la respuesta, mostramos un error general.
                
                return; // Salimos de la función porque ya manejamos el error.
            }

            // Si todo está bien y no hay problemas, le decimos a nuestra función de devolución de llamada que todo salió bien (sin errores).
            callback(null);
        })
        .catch(error => callback(new SystemError(error.message))); // Si hay un error al enviar la solicitud, mostramos un error general.
}

// Exportamos nuestra función 'createNewPost' para que otras partes de nuestro programa puedan usarla.
export default createNewPost;
