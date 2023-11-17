// Función para autenticar al usuario
function authenticateUser(email, password) {
    // Validar el formato del correo electrónico
    validateEmail(email)
    
    // Validar el formato de la contraseña
    validatePassword(password)

    // Buscar al usuario en la base de datos utilizando el correo electrónico
    const user = db.findUserByEmail(email)

    // Si no se encuentra al usuario, lanzar un error indicando credenciales incorrectas
    if (!user)
        throw new Error('Credenciales incorrectas')

    // Si la contraseña proporcionada no coincide con la almacenada en la base de datos, lanzar un error
    if (user.password !== password)
        throw new Error('Credenciales incorrectas')

    // Devolver el ID del usuario si la autenticación es exitosa
    return user.id
}
