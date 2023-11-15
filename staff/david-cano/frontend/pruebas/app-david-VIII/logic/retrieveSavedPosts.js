// Función para recuperar las publicaciones guardadas por un usuario
function retrieveSavedPosts(userId) {
    // Validar que el ID del usuario sea un texto válido
    validateText(userId, 'user id')

    // Buscar al usuario en la base de datos utilizando el ID del usuario
    const user = db.findUserById(userId)

    // Si no se encuentra al usuario, lanzar un error indicando que el usuario no fue encontrado
    if (!user)
        throw new Error('Usuario no encontrado')

    // Obtener todas las publicaciones de la base de datos, revertir el orden y filtrar solo las guardadas por el usuario actual
    const posts = db.getPosts().reverse().filter(function (post) {
        return user.saved.includes(post.id)
    })

    // Iterar sobre cada publicación
    posts.forEach(function (post) {
        // Buscar al autor de la publicación en la base de datos utilizando su ID
        const author = db.findUserById(post.author)

        // Modificar el objeto 'author' en la publicación para incluir solo el ID y el nombre del autor
        post.author = {
            id: author.id,
            name: author.name
        }

        // Agregar una propiedad 'liked' a la publicación indicando si el usuario actual dio "like" a la publicación
        post.liked = post.likes.includes(userId)

        // Agregar una propiedad 'saved' a la publicación indicando si el usuario actual guardó la publicación
        post.saved = user.saved.includes(post.id)
    })

    // Devolver la lista de publicaciones modificada
    return posts
}
