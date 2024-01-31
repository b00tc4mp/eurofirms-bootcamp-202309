function registerUser(name, email, password) {

    validateText(name, "name")
    validateEmail(email)
    validatePassword(password)

    var foundUser = find(users, function (user) {
        return user.email === email
    })
    //sino encuentro el usuario
    if (foundUser !== undefined)
        throw new Error("User alredy exists")

    //se crea una array con un objeto vacio, 
    var user = {}
    //a cada objeto se le asigna una propiedad, que recoge los datos del formulacio (name, email, password)
    user.name = name
    user.email = email
    user.password = password
    //con esto el ultimo usuario que se registre se incorpora en la array
    users.push(user)


}