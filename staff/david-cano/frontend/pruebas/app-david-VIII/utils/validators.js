// Función para validar que un texto no esté vacío y sea de tipo string
function validateText(text, explain) {
    // Verificar que el texto sea de tipo string
    if (typeof text !== 'string') throw new TypeError(explain + ' no es una cadena de texto')

    // Verificar que el texto no esté vacío después de eliminar espacios en blanco
    if (text.trim().length === 0) throw new Error(explain + ' está vacío')
}

// Función para validar el formato de un correo electrónico
function validateEmail(email) {
    // Utilizar la función de validación de texto para asegurarse de que el email no esté vacío y sea de tipo string
    validateText(email, 'email')

    // Verificar que el email contenga al menos un símbolo '@'
    if (!email.includes('@')) throw new Error('El correo electrónico no es válido')

    // Verificar que el email contenga al menos un punto ('.') para indicar el dominio
    if (!email.includes('.')) throw new Error('El correo electrónico no es válido')
}

// Función para validar la longitud de una contraseña
function validatePassword(password) {
    // Utilizar la función de validación de texto para asegurarse de que la contraseña no esté vacía y sea de tipo string
    validateText(password, 'password')

    // Verificar que la contraseña tenga al menos 8 caracteres
    if (password.length < 8) throw new RangeError('La longitud de la contraseña es menor que 8')
}

// Función para validar el formato de una URL
function validateUrl(url, explain) {
    // Utilizar la función de validación de texto para asegurarse de que la URL no esté vacía y sea de tipo string
    validateText(url, explain)

    // Verificar que la URL comience con 'http'
    if (!url.startsWith('http')) throw new Error(explain + ' no es válida')
}

// Función para validar que un valor sea de tipo número
function validateNumber(number, explain) {
    // Verificar que el valor sea de tipo número
    if (typeof number !== 'number') throw new TypeError(explain + ' no es un número')
}
