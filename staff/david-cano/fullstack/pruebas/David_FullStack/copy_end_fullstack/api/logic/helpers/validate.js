// Importa la función 'isValidObjectId' de la biblioteca 'mongoose' para validar si un identificador de objeto es válido
const { isValidObjectId } = require('mongoose')

// Importa la clase de error 'ContentError' desde el archivo '../errors'
const { ContentError } = require('../errors')

// Crea un objeto llamado 'validate' que contiene varias funciones de validación
const validate = {
    // Función que valida si un texto es una cadena no vacía
    text(text, explain) {
        // Verifica si 'text' no es una cadena, y en ese caso, lanza un error de tipo
        if (typeof text !== 'string') throw new TypeError(explain + ' is not a string')

        // Verifica si 'text' después de quitar espacios en blanco tiene longitud 0, y en ese caso, lanza un error de contenido
        if (text.trim().length === 0) throw new ContentError(explain + ' is empty string')
    },

    // Función que valida si un correo electrónico es válido
    email(email, explain) {
        // Utiliza la función 'text' para validar que 'email' es una cadena no vacía
        this.text(email, explain)

        // Verifica si 'email' contiene '@', y en caso contrario, lanza un error de contenido
        if (!email.includes('@')) throw new ContentError(explain + ' is not a valid email')

        // Verifica si 'email' contiene '.', y en caso contrario, lanza un error de contenido
        if (!email.includes('.')) throw new ContentError(explain + ' is not a valid email')
    },

    // Función que valida si una contraseña cumple con ciertos criterios
    password(password, explain) {
        // Utiliza la función 'text' para validar que 'password' es una cadena no vacía
        this.text(password, explain)

        // Verifica si la longitud de 'password' es menor que 8, y en ese caso, lanza un error de rango
        if (password.length < 8) throw new RangeError(explain + ' length is lower than 8 password')
    },

    // Función que valida si una URL es válida
    url(url, explain) {
        // Utiliza la función 'text' para validar que 'url' es una cadena no vacía
        this.text(url, explain)

        // Verifica si 'url' no comienza con 'http', y en ese caso, lanza un error de contenido
        if (!url.startsWith('http')) throw new ContentError(explain + ' is not a valid url')
    },

    // Función que valida si un valor es un número
    number(number, explain) {
        // Verifica si 'number' no es un número, y en ese caso, lanza un error de tipo
        if (typeof number !== 'number') throw new TypeError(explain + ' is not a number')
    },

    // Función que valida si un valor es una función
    function(func, explain) {
        // Verifica si 'func' no es una función, y en ese caso, lanza un error de tipo
        if (typeof func !== 'function') throw new TypeError(explain + ' is not a function')
    },

    // Función que valida si un identificador es válido utilizando la función 'isValidObjectId' de 'mongoose'
    id(id, explain) {
        // Verifica si 'id' no es un identificador de objeto válido, y en ese caso, lanza un error de tipo
        if (!isValidObjectId(id)) throw new TypeError(explain + ' is not a valid id')
    }
}

// Exporta el objeto 'validate' para que pueda ser utilizado en otros archivos
module.exports = validate
