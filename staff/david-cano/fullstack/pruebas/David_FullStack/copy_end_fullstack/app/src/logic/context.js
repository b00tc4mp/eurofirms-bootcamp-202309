// Importamos la herramienta 'JWT' desde un lugar llamado "../utils/JWT".
import JWT from "../utils/JWT";

// Creamos un objeto llamado 'context' con dos partes: 'storage' y 'jwt'.
const context = {
    // La parte 'storage' es como una caja especial donde podemos guardar cosas. En este caso, es como una caja llamada 'sessionStorage'.
    storage: sessionStorage,
    // La parte 'jwt' es donde pondremos nuestro token secreto si lo tenemos.
    jwt: null
}

// Verificamos si ya tenemos un token secreto guardado en la 'sessionStorage'.
if (context.storage.token)
    // Si lo tenemos, creamos una nueva herramienta 'JWT' y la guardamos en la parte 'jwt' de nuestro objeto 'context'.
    context.jwt = new JWT(context.storage.token);

// Exportamos nuestro objeto 'context' para que otras partes de nuestro programa puedan usarlo.
export default context;
