function registerUser(name, email, password) {
    validateText(name, 'name')
    validateEmail(email)
    validatePassword(password)
    
    //BUSCAR USUARIO POR EMAIL, para comprobar si esta registrado
    var foundUser = find(users, function (user){
        return user.email === email
    })

    //Si existe el usuario, si fue encontrado, entonces error
    if(foundUser !== undefined)
        throw new Error('El usuario ya está registrado (User already exists)')
    var user = {}
    user.name = name
    user.email = email
    user.password = password

    users.push(user)
}