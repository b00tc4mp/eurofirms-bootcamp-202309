function registerUser(name, email, password){
// Validar que el nombre tenga un formato válido
    validateText(name, 'name')
// Validar que el email tenga un formato válido
    validateEmail(email)
// Validar que la contraseña tenga un formato válido
    validatePassword(password)
    
    //BUSCAR USUARIO POR EMAIL, para comprobar si esta registrado
    var foundUser = find(users, function (user){
        return user.email === email
    })

    //Si existe el usuario, si fue encontrado, entonces error
    if(foundUser !== undefined)
        throw new Error('El usuario ya está registrado (User already exists)')

     // Crear un nuevo objeto de usuario   
    var user = {}
    user.name = name
    user.email = email
    user.password = password

     // Agregar el nuevo usuario a la lista de usuarios
    users.push(user)
}