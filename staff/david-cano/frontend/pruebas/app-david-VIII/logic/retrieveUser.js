// Función para recuperar la información de un usuario por su ID
function retrieveUser(userId) {
    // Validar que el ID del usuario sea un texto válido
    validateText(userId, 'user id')

    // Buscar al usuario en la base de datos utilizando el ID del usuario
    const user = db.findUserById(userId)

    // Si no se encuentra al usuario, lanzar un error indicando que el usuario no fue encontrado
    if (!user)
        throw new Error('Usuario no encontrado')

    // Devolver la información del usuario encontrado
    return user
}
