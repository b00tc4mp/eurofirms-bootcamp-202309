// Función para crear una nueva publicación
function createNewPost(userId, image, imageDescription, text) {
    // Validar que el ID del usuario sea un texto válido
    validateText(userId, 'user id')

    // Validar que la URL de la imagen sea válida
    validateUrl(image, 'image url')

    // Validar que la descripción de la imagen sea un texto válido
    validateText(imageDescription, 'image description')

    // Validar que el texto de la publicación sea un texto válido
    validateText(text, 'text')

    // Buscar al usuario en la base de datos utilizando el ID del usuario
    const user = db.findUserById(userId)

    // Si no se encuentra al usuario, lanzar un error indicando que el usuario no fue encontrado
    if (!user)
        throw new Error('Usuario no encontrado')

    // Crear una nueva publicación en la base de datos con la información proporcionada
    db.createPost(userId, image, imageDescription, text)
}
