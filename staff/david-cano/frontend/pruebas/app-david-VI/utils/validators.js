function validateText(text, explain) {
    // Validar si el texto es una cadena de texto
    if (typeof text !== 'string') throw new TypeError(explain + ' no es una cadena de texto');
    // Validar si el texto está vacío
    if (text.trim().length === 0) throw new Error(explain + ' está vacío');
}

function validateEmail(email) {
    // Validar el formato del email
    validateText(email, 'email');
    // Validar si el email contiene el símbolo "@" y un punto "."
    if (!email.includes('@')) throw new Error('el email no es válido');
    if (!email.includes('.')) throw new Error('el email no es válido');
}

function validatePassword(password) {
    // Validar la longitud de la contraseña
    validateText(password, 'contraseña');
    if (password.length < 8) throw new RangeError('la longitud de la contraseña es menor que 8');
}

function validateUrl(url, explain) {
    // Validar el formato de la URL
    validateText(url, explain);
    // Validar si la URL comienza con "http"
    if (!url.startsWith('http')) throw new Error(explain + ' no es válido');
}

function validateNumber(number, explain) {
    // Validar si el número es de tipo numérico
    if (typeof number !== 'number') throw new TypeError(explain + ' no es un número');
}

/*
Estas funciones de validación se utilizan para verificar diferentes tipos de datos:

validateText: Valida si un texto es una cadena de texto no vacía.
validateEmail: Valida si un correo electrónico tiene un formato válido, es decir, si contiene el símbolo "@" y un punto ".".
validatePassword: Valida si una contraseña tiene una longitud mínima de 8 caracteres.
validateUrl: Valida si una URL tiene un formato válido, es decir, si comienza con "http".
validateNumber: Valida si un número es de tipo numérico.
Estas funciones lanzarán errores específicos si los datos no cumplen con los criterios de validación correspondientes.

Recuerde que este código se basa en JavaScript puro y no requiere ninguna biblioteca externa.
*/