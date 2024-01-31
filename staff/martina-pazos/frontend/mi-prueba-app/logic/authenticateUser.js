function authenticateUser(email, password) {

    validateEmail(email)
    validatePassword(password)
    // vamos a utilizar este método find para buscar en la array , le pasamos un callback (funcion (user))
    var foundUser = find(users, function (user) {
        return user.email === email
    })
    //sino encuentro el usuario
    if (foundUser === undefined)
        //esta es la manera de lanzar un error en javaScrit
        throw new Error("Wrong credentials")

    if (foundUser.password !== password)
        throw new Error("Wrong credentials")
}