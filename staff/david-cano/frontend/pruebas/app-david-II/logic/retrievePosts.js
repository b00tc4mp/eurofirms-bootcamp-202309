function retrievePosts(email){
    validateEmail(email)

    //BUSCAR USUARIO POR EMAIL, para comprobar si esta registrado
    var foundUser = find(users, function (user){
        return user.email === email
    })

    // if user not found then error
    if(foundUser === undefined)
        throw new Error('User not found')

    return posts
}