function registerUser(name, email, password) {
    // Validar el formato del nombre
    validateText(name, 'nombre')
    // Validar el formato del email
    validateEmail(email)
    // Validar el formato de la contraseña
    validatePassword(password)

    // Buscar al usuario en la base de datos usando el email proporcionado
    const user = db.findUserByEmail(email)

    // Si el usuario ya existe, lanzar un error indicando que el usuario ya existe
    if (user)
        throw new Error('El usuario ya existe')

    // Crear un nuevo usuario en la base de datos con los datos proporcionados
    db.createUser(name, email, password)
}

/*
En este código, la función registerUserrecibe un name(nombre), un emaily una passwordcomo parámetros de entrada. A continuación, realice los siguientes pasos:

Validar el formato del nombre : Se llama a la función validateTextpara comprobar si el formato del namees válido. Esto asegura que nameel formato sea adecuado.

Validar el formato del correo electrónico : Se llama a la función validateEmailpara comprobar si el formato del emailes válido. Esto asegura que emailel formato sea correcto.

Validar el formato de la contraseña : Se llama a la función validatePasswordpara comprobar si el formato de la passwordes válido. Esto asegura que la passwordcumple con los criterios requeridos, como longitud mínima o requisitos específicos de caracteres.

Buscar al usuario en la base de datos : Se llama a la función db.findUserByEmailpara buscar un usuario en la base de datos basados ​​en el emailproporcionado. Esta función verifica si ya existe un usuario con el mismo email.

Comprobar si el usuario ya existe : Si se encuentra un usuario en la base de datos para el emailproporcionado, se lanza un error con el mensaje "El usuario ya existe". Esto indica que ya hay un usuario registrado con el mismo email.

Crear un nuevo usuario : Si el usuario no existe en la base de datos, se llama a la función db.createUserpara crear un nuevo usuario en la base de datos con los datos proporcionados ( name, email, password).

Recuerde que este código asume que existen las funciones validateText, validateEmail, validatePassword, db.findUserByEmaily db.createUserque se encargan de realizar las validaciones y correspondientes en la base de datos.
*/