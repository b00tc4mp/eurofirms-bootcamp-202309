// Función para eliminar una publicación
function deletePost(userId, postId) {
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

    // Verificar que la publicación pertenezca al usuario antes de eliminarla
    if (post.author !== userId)
        throw new Error('La publicación no pertenece al usuario')

    // Obtener la lista de usuarios de la base de datos
    const users = db.getUsers()

    // Iterar sobre la lista de usuarios
    users.forEach(function (user) {
        // Encontrar el índice de la publicación en la lista de publicaciones guardadas del usuario
        const index = user.saved.indexOf(post.id)

        // Si se encuentra la publicación en la lista, eliminarla y actualizar el usuario en la base de datos
        if (index > -1) {
            user.saved.splice(index, 1)
            db.updateUser(user)
        }
    })

    // Eliminar la publicación de la base de datos utilizando su ID
    db.removePostById(postId)
}
