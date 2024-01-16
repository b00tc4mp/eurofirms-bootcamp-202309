//lo que hacemos aqui es llamar al usuarios por el email y el nombre de usuario
function retrieverUser(email) {
    var foundUser = null
    // vamos a utilizar este método find para buscar en la array , le pasamos un callback (funcion (user))
    var foundUser = find(users, function (user) {
        return user.email === email
    })

    if (foundUser === undefined)
        //esta es la manera de lanzar un error en javaScrit
        throw new Error("Wrong credentials")
    // si lo en encontrafo lo devuelvo
    return foundUser
}
