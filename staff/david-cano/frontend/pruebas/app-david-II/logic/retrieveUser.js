function retrieveUser(email){
// Validar que el email tenga un formato válido
    validateEmail(email)

    // Buscar usuario por email
    var foundUser = find(users, function (user){
        return user.email === email
    })

    // if user not found then error
    // Si no encuentra usuario lanza un error.
    if(foundUser === undefined)
        throw new Error('Wrong credentials')

    // Devolver el usuario encontrado    
    return foundUser
}