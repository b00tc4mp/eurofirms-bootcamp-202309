function registerUser(name, email, password) {
    validateText(name, 'name')
    validateEmail(email)
    validatePassword(password)

    //buscar usuario por email

    var foundUser = find(users, function (user) {
        return user.email === email
    })

    //if user found  then error
    if (foundUser !== undefined)
        throw new Error('user alrealy exists')

    var user = {}
    user.name = name
    user.email = email
    user.password = password

    users.push(user)

}
