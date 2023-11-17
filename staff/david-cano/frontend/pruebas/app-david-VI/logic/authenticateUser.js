function authenticateUser(email, password) {

    // Validar el formato del email
    validateEmail(email)
    
    // Validar el formato de la contraseña
    validatePassword(password)

    // Buscar al usuario en la base de datos usando el email proporcionado
    const user = db.findUserByEmail(email)

    // Si no se encuentra ningún usuario, lanzar un error indicando credenciales incorrectas
    if (!user)
        throw new Error('Credenciales incorrectas')

    // Si la contraseña del usuario no coincide con la contraseña proporcionada, lanzar un error indicando credenciales incorrectas
    if (user.password !== password)
        throw new Error('Credenciales incorrectas')

    // Si el email y la contraseña son válidos y coinciden con un usuario en la base de datos, devolver el ID del usuario
    return user.id
}

/*
En este código, la función authenticateUser recibe un correo electrónico y una contraseña como parámetros de entrada. A continuación, realice los siguientes pasos:

Validar el formato del correo electrónico : Se llama a la función validateEmail para comprobar si el formato del correo electrónico es válido. Esto asegura que el correo electrónico siga la estructura correcta y contenga los componentes necesarios.

Validar el formato de la contraseña : Se llama a la función validatePassword para comprobar si el formato de la contraseña es válido. Esto asegura que la contraseña cumple con los criterios requeridos, como longitud mínima o requisitos específicos de caracteres.

Buscar al usuario en la base de datos : Se llama a la función db.findUserByEmail para buscar un usuario en la base de datos basados ​​en el correo electrónico proporcionado. Esta función recupera el objeto de usuario asociado con el correo electrónico.

Comprobar si el usuario existe : Si no se encuentra ningún usuario en la base de datos para el correo electrónico proporcionado, se lanza un error con el mensaje "Credenciales incorrectas". Esto indica que el correo electrónico no está asociado a ningún usuario en el sistema.

Comprobar si la contraseña coincide : Si se encuentra al usuario en la base de datos, el código verifica si la contraseña proporcionada coincide con la contraseña almacenada del usuario. Si no coincide, se lanza un error con el mensaje "Credenciales incorrectas". Esto indica que la contraseña es incorrecta para el correo electrónico dado.

Devolver el ID del usuario : Si el email y la contraseña son válidos y coinciden con un usuario en la base de datos, la función devuelve el ID del usuario. Esto indica una autenticación exitosa.
*/