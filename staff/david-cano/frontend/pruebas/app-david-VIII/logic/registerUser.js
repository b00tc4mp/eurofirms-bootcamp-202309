// Función para registrar a un nuevo usuario
function registerUser(name, email, password) {
    // Validar que el nombre sea un texto válido
    validateText(name, 'name')

    // Validar que el correo electrónico tenga un formato válido
    validateEmail(email)

    // Validar que la contraseña cumpla con los requisitos
    validatePassword(password)

    // Buscar al usuario en la base de datos utilizando el correo electrónico
    const user = db.findUserByEmail(email)

    // Si el usuario ya existe, lanzar un error indicando que el usuario ya está registrado
    if (user)
        throw new Error('El usuario ya existe')

    // Crear un nuevo usuario en la base de datos con la información proporcionada
    db.createUser(name, email, password)
}
