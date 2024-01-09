// Importamos dos tipos de errores, uno llamado 'JWTError' y otro 'ContentError', desde un lugar llamado "../errors".
import { JWTError, ContentError } from "../errors";

// Importamos una herramienta llamada 'JWT' desde un lugar llamado '../../utils'.
import { JWT } from '../../utils';

// Creamos un objeto llamado 'validate' que contiene varias funciones útiles para verificar diferentes cosas.
const validate = {
    // Función para validar texto.
    text(text, explain) {
        // Verificamos si el 'text' no es un string y lanzamos un error si no lo es.
        if (typeof text !== 'string') throw new TypeError(explain + ' is not a string');
        // Verificamos si el 'text' está vacío y lanzamos un error si lo está.
        if (text.trim().length === 0) throw new ContentError(explain + ' is empty');
    },

    // Función para validar un email.
    email(email) {
        // Usamos la función 'text' anteriormente definida para verificar si 'email' es un string y no está vacío.
        this.text(email, 'email');

        // Verificamos si 'email' contiene un '@' y un '.'. Si no, lanzamos un error.
        if (!email.includes('@')) throw new ContentError('email is not valid');
        if (!email.includes('.')) throw new ContentError('email is not valid');
    },

    // Función para validar una contraseña.
    password(password) {
        // Usamos la función 'text' para verificar si 'password' es un string y no está vacío.
        this.text(password, 'password');

        // Verificamos si la longitud de 'password' es menor que 8. Si es así, lanzamos un error.
        if (password.length < 8) throw new RangeError('password length is lower than 8');
    },

    // Función para validar una URL.
    url(url, explain) {
        // Usamos la función 'text' para verificar si 'url' es un string y no está vacío.
        this.text(url, explain);

        // Verificamos si 'url' comienza con 'http'. Si no, lanzamos un error.
        if (!url.startsWith('http')) throw new ContentError(explain + ' is not valid');
    },

    // Función para validar un número.
    number(number, explain) {
        // Verificamos si 'number' es realmente un número. Si no, lanzamos un error.
        if (typeof number !== 'number') throw new TypeError(explain + ' is not a number');
    },

    // Función para validar una función.
    function(func, explain) {
        // Verificamos si 'func' es realmente una función. Si no, lanzamos un error.
        if (typeof func !== 'function') throw new TypeError(explain + ' is not a function');
    },

    // Función para validar un token JWT.
    jwt(jwt) {
        // Verificamos si 'jwt' existe y es una instancia de la herramienta 'JWT'. Si no, lanzamos un error.
        if (!jwt || !(jwt instanceof JWT)) throw new JWTError('JWT not valid');
        // Verificamos si el token JWT ha expirado. Si es así, lanzamos un error.
        if (jwt.isExpired()) throw new JWTError('JWT expired');
    }
}

// Exportamos el objeto 'validate' para que otras partes de nuestro programa puedan usar estas funciones de validación.
export default validate;
