function createNewPost(userId, image, imageDescription, text) {
    // Validar el formato del userId
    validateText(userId, 'id de usuario')
    // Validar el formato de la URL de la imagen
    validateUrl(image, 'URL de la imagen')
    // Validar el formato de la descripción de la imagen
    validateText(imageDescription, 'descripción de la imagen')
    // Validar el formato del texto
    validateText(text, 'texto')

    // Buscar al usuario en la base de datos usando el userId proporcionado
    const user = db.findUserById(userId)

    // Si no se encuentra ningún usuario, lanzar un error indicando que el usuario no se encontró
    if (!user)
        throw new Error('Usuario no encontrado')

    // Crear una nueva publicación en la base de datos con los datos proporcionados
    db.createPost(userId, image, imageDescription, text)
}

/*
En este código, la función createNewPostrecibe un userId, una image(URL de la imagen), una imageDescription(descripción de la imagen) y un textcomo parámetros de entrada. A continuación, realice los siguientes pasos:

Validar el formato del userId : Se llama a la función validateTextpara comprobar si el formato del userIdes válido. Esto asegura que userIdel formato sea adecuado.

Validar el formato de la URL de la imagen : Se llama a la función validateUrlpara comprobar si el formato de la image(URL de la imagen) es válido. Esto asegura que la URL de la imagen tiene el formato correcto.

Validar el formato de la descripción de la imagen : Se llama a la función validateTextpara comprobar si el formato de la imageDescription(descripción de la imagen) es válido. Esto asegura que la descripción de la imagen tiene el formato adecuado.

Validar el formato del texto : Se llama a la función validateTextpara comprobar si el formato del textes válido. Esto asegura que el texto tiene el formato adecuado.

Buscar al usuario en la base de datos : Se llama a la función db.findUserByIdpara buscar un usuario en la base de datos basados ​​en el userIdproporcionado. Esta función recupera el objeto de usuario asociado con el userId.

Comprobar si el usuario existe : Si no se encuentra ningún usuario en la base de datos para el userIdproporcionado, se lanza un error con el mensaje "Usuario no encontrado". Esto indica que el usuario no existe en la base de datos.

Crear una nueva publicación : Si el usuario se encuentra en la base de datos, se llama a la función db.createPostpara crear una nueva publicación en la base de datos con los datos proporcionados ( userId, image, imageDescription, text).

Recuerde que este código asume que existen las funciones validateText, validateUrl, db.findUserByIdy db.createPostque se encargan de realizar las validaciones y operaciones correspondientes en la base de datos.
*/