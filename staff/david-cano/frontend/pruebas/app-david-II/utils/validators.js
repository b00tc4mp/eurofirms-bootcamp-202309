function validateText(text, explain){
    // Validar que el texto no esté vacío
  // Comprueba si el tipo de dato de `texto` es `string`.
    if(typeof text !== 'string')
    // Lanzar un TypeError si el texto no es una cadena
    throw new TypeError(explain + 'is not a string')
    // Comprueba si el texto tiene al menos un carácter, sin contar los espacios en blanco al principio y al final.
    if(text.trim().length === 0) throw new Error(explain + ' is empty')
}

function validateEmail(email){
     // Validar que el email tenga un formato válido
     //Se utiliza para validar que el texto no esté vacío y que tenga al menos un carácter.
    validateText(email, 'email')
    // Validar que el email contenga el símbolo "@"
    if(!email.includes('@')) throw new Error('email is not valid')
    // Validar que el email contenga un punto "."
    if(!email.includes('.')) throw new Error('email is not valid')
}

function validatePassword(password){
    // Validar que la contraseña tenga un formato válido
     //Se utiliza para validar que el texto no esté vacío y que tenga al menos un carácter.
    validateText(password, 'password')
    // Validar que la contraseña tenga al menos 8 caracteres
    if(password.length < 8) throw new RangeError('password length is lower than 8')
}

function validateUrl(url, explain){
    // Validar que la URL tenga un formato válido
     //Se utiliza para validar que el texto no esté vacío y que tenga al menos un carácter.
    validateText(url, explain)
    // Validar que la URL comience con el protocolo "http"
    if(!url.startsWith('http')) throw new Error(explain + ' is not valid')
}