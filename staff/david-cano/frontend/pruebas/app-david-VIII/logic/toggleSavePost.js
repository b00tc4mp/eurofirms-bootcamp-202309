// Función para activar o desactivar la opción de "guardar" una publicación por parte de un usuario
function toggleSavePost(userId, postId) {
    // Validar que el ID del usuario sea un texto válido
    validateText(userId, 'user id')

    // Validar que el ID de la publicación sea un texto válido
    validateText(postId, 'post id')

    // Buscar al usuario en la base de datos utilizando el ID del usuario
    const user = db.findUserById(userId)

    // Si no se encuentra al usuario, lanzar un error indicando que el usuario no fue encontrado
    if (!user)
        throw new Error('Usuario no encontrado')

    // Buscar la publicación en la base de datos utilizando el ID de la publicación
    const post = db.findPostById(postId)

    // Si no se encuentra la publicación, lanzar un error indicando que la publicación no fue encontrada
    if (!post)
        throw new Error('Publicación no encontrada')

    // Encontrar el índice del ID de la publicación en la lista de publicaciones "guardadas" por el usuario
    const index = user.saved.indexOf(postId)

    // Si la publicación no está en la lista, agregar el ID de la publicación a la lista de publicaciones "guardadas"
    // Si la publicación ya está en la lista, eliminar el ID de la publicación de la lista de publicaciones "guardadas"
    if (index < 0)
        user.saved.push(postId)
    else
        user.saved.splice(index, 1)

    // Actualizar la información del usuario en la base de datos con la nueva lista de publicaciones "guardadas"
    db.updateUser(user)
}
