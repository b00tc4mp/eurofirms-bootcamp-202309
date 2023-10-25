function regsiterUser(name, email, password) {
    //buscar usuario por email

    var foundUser = null

    for (var i = 0; i < user.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user
            break
        }
    }
    //if user exists (if was found)then error

    if (foundUser !== null)
        throw new Error('user alrealy exists')

    var user = {}
    user.name = name
    user.email = email
    user.password = password

    user.push(user)

}
