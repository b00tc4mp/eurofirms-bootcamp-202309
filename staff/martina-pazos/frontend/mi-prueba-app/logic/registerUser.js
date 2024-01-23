function registerUser(name, email, password) {
    var foundUser = null

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user
            break
        }
    }


    if (foundUser !== null) {
        throw new Error("User alredy exists")
    }
    //se crea una array con un objeto vacio, 
    var user = {}
    //a cada objeto se le asigna una propiedad, que recoge los datos del formulacio (name, email, password)
    user.name = name
    user.email = email
    user.password = password
    //con esto el ultimo usuario que se registre se incorpora en la array
    users.push(user)


}