// Importamos una herramienta mágica llamada 'JWT' y otras cosas útiles.
import { JWT } from '../utils';
import { validate } from './helpers';
import context from './context';
import errors, { SystemError } from './errors';

// Creamos una función especial (mágica) llamada 'loginUser' para ayudarnos a iniciar sesión.
function loginUser(email, password, callback) {
    // Verificamos si el correo electrónico es válido usando una herramienta especial llamada 'validate'.
    validate.email(email);

    // Verificamos si la contraseña es válida usando la misma herramienta mágica 'validate'.
    validate.password(password);

    // Verificamos si la 'callback' (función especial) que recibimos es realmente una función.
    validate.function(callback, 'callback');

    // Preparamos una carta (solicitud) que le enviaremos a un lugar especial para iniciar sesión.
    const req = {
        method: 'POST',  // Le decimos que queremos iniciar sesión.
        headers: {
            'Content-Type': 'application/json'  // Le decimos cómo está escrita nuestra carta.
        },
        body: JSON.stringify({ email, password })  // Metemos en la carta el correo y la contraseña.
    };

    // Enviamos la carta al lugar especial (servidor) usando una herramienta mágica llamada 'fetch'.
    fetch(`${import.meta.env.VITE_API_URL}/users/authenticate`, req)
    .then(res => {
        // Revisamos si la respuesta del servidor está bien.
        if (!res.ok) {
            // Si la respuesta no está bien, leemos lo que dice la carta (respuesta).
            res.json()
                .then(body => {
                    // Según lo que dice la carta, creamos un problema mágico (un error) usando otro conjuro especial.
                    const constructor = errors[body.error];

                    // Llamamos a la función especial 'callback' y le decimos sobre el problema mágico que ocurrió.
                    callback(new constructor(body.message));
                })
                .catch(error => callback(new SystemError(error.message)));  // En caso de problemas adicionales, también lo decimos.

                return;  // Salimos de la función aquí porque ya manejamos la carta (respuesta).
            }

            // Si la respuesta está bien, leemos lo que dice la carta (respuesta).
            res.json()
                .then(token => {
                    // Guardamos el papel mágico (token) en un lugar seguro para que nadie más lo vea.
                    context.storage.token = token;

                    // Creamos otro papel mágico especial (un objeto 'JWT') usando otro conjuro.
                    context.jwt = new JWT(token);

                    // Llamamos a la función especial 'callback' y le decimos que todo salió bien, no hay problemas.
                    callback(null);
                })
                .catch(error => callback(new SystemError(error.message)));  // En caso de problemas adicionales, también lo decimos.
        })
        .catch(error => callback(new SystemError(error.message)));  // En caso de problemas con el envío de la carta, también lo decimos.
}

// Exportamos la función 'loginUser' para que otros lugares del programa puedan usarla.
export default loginUser;
