function retrievePosts(email){
    // Validar que el email tenga un formato válido
    validateEmail(email)

    //BUSCAR USUARIO POR EMAIL, para comprobar si esta registrado
    var foundUser = find(users, function (user){
        return user.email === email
    })

    // if user not found then error
    //Si no se encontró usuario lanzar un error
    if(foundUser === undefined)
        throw new Error('User not found')

     // Devolver la lista de publicaciones   
    return posts
}