//lo que hacemos aqui es llamar al usuarios por el email y el nombre de usuario
function retrieverUser(email) {

    validateEmail(email)

    var foundUser = find(users, function (user) {
        return user.email === email
    })

    if (foundUser === undefined)
        //esta es la manera de lanzar un error en javaScrit
        throw new Error("Wrong credentials")
    // si lo en encontrafo lo devuelvo
    return foundUser
}
