function toggleLikePost(userId, postId) {
    // Validar el formato del userId
    validateText(userId, 'id de usuario')
    // Validar el formato del postId
    validateText(postId, 'id de publicación')

    // Buscar al usuario en la base de datos usando el userId proporcionado
    const user = db.findUserById(userId)

    // Si no se encuentra ningún usuario, lanzar un error indicando que el usuario no se encontró
    if (!user)
        throw new Error('Usuario no encontrado')

    // Buscar la publicación en la base de datos usando el postId proporcionado
    const post = db.findPostById(postId)

    // Si no se encuentra ninguna publicación, lanzar un error indicando que la publicación no se encontró
    if (!post)
        throw new Error('Publicación no encontrada')

    // Buscar el índice del userId en la lista de likes de la publicación
    const index = post.likes.indexOf(userId)

    // Si el userId no está en la lista de likes, agregarlo
    if (index < 0)
        post.likes.push(userId)
    // Si el userId está en la lista de likes, eliminarlo
    else
        post.likes.splice(index, 1)

    // Actualizar la publicación en la base de datos
    db.updatePost(post)
}

/*
En este código, la función toggleLikePostrecibe un userIdy un postIdcomo parámetros de entrada. A continuación, realice los siguientes pasos:

Validar el formato del userId : Se llama a la función validateTextpara comprobar si el formato del userIdes válido. Esto asegura que userIdel formato sea adecuado.

Validar el formato del postId : Se llama a la función validateTextpara comprobar si el formato del postIdes válido. Esto asegura que postIdel formato sea adecuado.

Buscar al usuario en la base de datos : Se llama a la función db.findUserByIdpara buscar un usuario en la base de datos basados ​​en el userIdproporcionado. Esta función verifica si existe un usuario con el userIddado.

Comprobar si el usuario existe : Si no se encuentra ningún usuario en la base de datos para el userIdproporcionado, se lanza un error con el mensaje "Usuario no encontrado". Esto indica que el usuario no existe en la base de datos.

Buscar la publicación en la base de datos : Se llama a la función db.findPostByIdpara buscar una publicación en la base de datos basada en el postIdproporcionado. Esta función verifica si existe una publicación con el postIddado.

Comprobar si la publicación existe : Si no se encuentra ninguna publicación en la base de datos para el postIdproporcionado, se lanza un error con el mensaje "Publicación no encontrada". Esto indica que la publicación no existe en la base de datos.

Buscar el índice del userId en la lista de me gusta : Se utiliza el método indexOfpara buscar el índice del userIden la lista de me gusta de la publicación.

Agregar o eliminar el ID de usuario de la lista de Me gusta : Si userIdno está en la lista de Me gusta (índice menor a 0), se agrega a la lista utilizando el método push. Si el userIdestá en la lista de Me gusta (índice mayor o igual a 0), se elimina de la lista utilizando el método splice.

Actualizar la publicación en la base de datos : Se llama a la función db.updatePostpara actualizar la publicación en la base de datos con los cambios realizados.

Recuerde que este código asume que existen las funciones validateText, db.findUserById, db.findPostByIdy db.updatePost que se encargan de realizar las validaciones y operaciones correspondientes en la base de datos.
*/