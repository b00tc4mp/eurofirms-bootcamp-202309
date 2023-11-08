function retrieveUser(userId) {
    // Validar el formato del userId
    validateText(userId, 'id de usuario')

    // Buscar al usuario en la base de datos usando el userId proporcionado
    const user = db.findUserById(userId)

    // Si no se encuentra ningún usuario, lanzar un error indicando que el usuario no se encontró
    if (!user)
        throw new Error('Usuario no encontrado')

    // Devolver el objeto de usuario encontrado
    return user
}

/*
En este código, la función retrieveUserrecibe un userIdcomo parámetro de entrada. A continuación, realice los siguientes pasos:

Validar el formato del userId : Se llama a la función validateTextpara comprobar si el formato del userIdes válido. Esto asegura que userIdel formato sea adecuado.

Buscar al usuario en la base de datos : Se llama a la función db.findUserByIdpara buscar un usuario en la base de datos basados ​​en el userIdproporcionado. Esta función recupera el objeto de usuario asociado con el userId.

Comprobar si el usuario existe : Si no se encuentra ningún usuario en la base de datos para el userIdproporcionado, se lanza un error con el mensaje "Usuario no encontrado". Esto indica que el usuario no existe en la base de datos.

Devolver el objeto de usuario encontrado : Si se encuentra un usuario en la base de datos para el userIdproporcionado, se devuelve el objeto de usuario encontrado.

Recuerde que este código supone que existe la función validateTexty la función db.findUserByIdque se encargan de realizar las validaciones y operaciones correspondientes en la base de datos.
*/