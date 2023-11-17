// Función para activar o desactivar el "like" de un usuario en una publicación
function toggleLikePost(userId, postId) {
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

    // Encontrar el índice del usuario en la lista de "likes" de la publicación
    const index = post.likes.indexOf(userId)

    // Si el usuario no ha dado "like", agregar el ID del usuario a la lista de "likes"
    // Si el usuario ya ha dado "like", eliminar el ID del usuario de la lista de "likes"
    if (index < 0)
        post.likes.push(userId)
    else
        post.likes.splice(index, 1)

    // Actualizar la publicación en la base de datos con la nueva información de "likes"

    db.updatePost(post)
}
