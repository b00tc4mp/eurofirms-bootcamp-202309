// Importamos la herramienta 'validate' desde un lugar llamado './helpers'.
import { validate } from './helpers';

// Importamos el objeto 'context' desde un lugar llamado './context'.
import context from './context';

// Importamos los errores y el 'SystemError' desde un lugar llamado './errors'.
import errors, { SystemError } from './errors';

// Creamos una función llamada 'deletePost' que acepta dos cosas: 'postId' y 'callback'.
function deletePost(postId, callback) {
    // Usamos la herramienta 'validate' para asegurarnos de que 'postId' sea un identificador de publicación válido.
    validate.text(postId, 'post id');
    // Usamos la herramienta 'validate' para asegurarnos de que 'callback' sea una función.
    validate.function(callback, 'callback');
    // Usamos la herramienta 'validate' para asegurarnos de que hay un código secreto (JWT) almacenado en nuestro contexto.
    validate.jwt(context.jwt);

    // Creamos una solicitud (como pedir algo) que tiene información sobre lo que queremos hacer.
    const req = {
        method: 'DELETE', // Queremos borrar algo.
        headers: {
            Authorization: `Bearer ${context.storage.token}` // Adjuntamos nuestro código secreto para que sepan que somos nosotros.
        }
    };

    // Enviamos nuestra solicitud a un lugar especial en Internet donde pueden entender y procesar nuestras peticiones.
    fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, req)
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

// Exportamos nuestra función 'deletePost' para que otras partes de nuestro programa puedan usarla.
export default deletePost;
