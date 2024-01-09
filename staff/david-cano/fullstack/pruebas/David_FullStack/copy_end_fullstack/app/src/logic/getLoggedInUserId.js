// Importamos el objeto llamado 'context' desde el archivo 'context'.
import context from './context';

// Creamos una función llamada 'getLoggedInUserId'.
function getLoggedInUserId() {
    // Comprobamos si hay un objeto 'jwt' en el 'context' y obtenemos el sujeto (identificación de usuario) si existe.
    return context.jwt && context.jwt.getSubject();
}

// Exportamos la función 'getLoggedInUserId' para que otras partes de nuestro programa puedan usarla.
export default getLoggedInUserId;
