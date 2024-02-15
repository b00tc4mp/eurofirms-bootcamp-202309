function retrievePosts(email) {
    validateEmail(email)

    //ahora viene la lógica, ¿tú existes en esta app?
    var foundUser = find(users, function (user) {
        return user.email === email
    })
    //sino encuentro el usuario
    if (foundUser === undefined)
        throw new Error("User no found")

    return posts

}