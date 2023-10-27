function authenticateUser(email, password){
 // Validar que el email tenga un formato válido
    validateEmail(email)
 // Validar que la contraseña tenga un formato válido   
    validatePassword(password)

    //search user by email
    // Buscar al usuario por correo electrónico
    var foundUser = find(users, function (user){
        return user.email === email
    }) 

     //if user not found then error
    // Si el usuario no se encuentra, lanzar un error
        if (foundUser === undefined)
        throw new Error('Wrong credentials')

    // if user password is wrong then error
    // Si la contraseña del usuario es incorrecta, lanzar un error
    if(foundUser.password !== password)
        throw new Error('Wrong credentials')

}