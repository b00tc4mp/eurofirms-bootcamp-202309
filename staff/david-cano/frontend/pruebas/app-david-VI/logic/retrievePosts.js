function retrievePosts(userId) {
    // Validar el formato del userId
    validateText(userId, 'id de usuario')

    // Buscar al usuario en la base de datos usando el userId proporcionado
    const user = db.findUserById(userId)

    // Si no se encuentra ningún usuario, lanzar un error indicando que el usuario no se encontró
    if (!user)
        throw new Error('Usuario no encontrado')

    // Obtener todas las publicaciones de la base de datos
    const posts = db.getPosts()

    // Iterar sobre cada publicación
    posts.forEach(function (post) {
        // Buscar al autor de la publicación en la base de datos
        const user = db.findUserById(post.author)

        // Actualizar el nombre del autor en la publicación
        post.author = user.name

        // Verificar si el usuario actual ha dado "like" a la publicación
        post.liked = post.likes.includes(userId)
    })

    // Devolver todas las publicaciones
    return posts
}

/*
En este código, la función retrievePostsrecibe un userIdcomo parámetro de entrada. A continuación, realice los siguientes pasos:

Validar el formato del userId : Se llama a la función validateTextpara comprobar si el formato del userIdes válido. Esto asegura que userIdel formato sea adecuado.

Buscar al usuario en la base de datos : Se llama a la función db.findUserByIdpara buscar un usuario en la base de datos basados ​​en el userIdproporcionado. Esta función recupera el objeto de usuario asociado con el userId.

Comprobar si el usuario existe : Si no se encuentra ningún usuario en la base de datos para el userIdproporcionado, se lanza un error con el mensaje "Usuario no encontrado". Esto indica que el usuario no existe en la base de datos.

Obtener todas las publicaciones : Se llama a la función db.getPostspara obtener todas las publicaciones de la base de datos.

Iterar sobre cada publicación : Se utiliza un bucle forEachpara iterar sobre cada publicación. Dentro del bucle, se realiza lo siguiente:

Se busca al autor de la publicación en la base de datos utilizando el authorde la publicación.
Se actualiza el nombre del autor en la publicación con el nombre obtenido de la base de datos.
Se verifica si el usuario actual ha dado "me gusta" a la publicación. Esto se hace comprobando si el userIdestá incluido en la lista de likesla publicación. El resultado se asigna a la propiedad likedde la publicación.
Devolver todas las publicaciones : Se devuelve el conjunto de publicaciones actualizadas.

Recuerde que este código asume que existen las funciones validateText, db.findUserByIdy db.getPostsque se encargan de realizar las validaciones y operaciones correspondientes en la base de datos.
*/