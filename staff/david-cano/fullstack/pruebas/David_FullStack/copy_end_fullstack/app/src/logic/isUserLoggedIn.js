// Importamos el contexto que contiene información sobre el usuario, como si ha iniciado sesión.
import context from './context';

// Creamos una función llamada 'isUserLoggedIn'.
function isUserLoggedIn() {
    // Revisamos si no hay información sobre el usuario en el contexto (si no ha iniciado sesión).
    if (!context.jwt)
        // Si no hay información del usuario, devolvemos 'false' para indicar que el usuario no ha iniciado sesión.
        return false;

    // Si hay información del usuario, devolvemos 'true' para indicar que el usuario ha iniciado sesión.
    return true;
}

// Exportamos la función 'isUserLoggedIn' para que otras partes de nuestro programa puedan usarla.
export default isUserLoggedIn;
