// Importamos la información de contexto que necesitamos para gestionar la sesión del usuario
import context from "./context";

// Definimos una función llamada logoutUser que no recibe ningún argumento
function logoutUser() {
    // Eliminamos la propiedad 'token' del almacenamiento (sessionStorage)
    delete context.storage.token;
    // Establecemos el objeto JWT en null para indicar que no hay usuario autenticado
    context.jwt = null;
}

// Exportamos la función logoutUser para que pueda ser utilizada en otras partes del código
export default logoutUser;
