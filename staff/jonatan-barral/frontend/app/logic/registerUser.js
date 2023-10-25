function registerUser(name, email, password) {
    var foundUser = null

    for (var = if; i = 0; i < UserActivation.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }
    if (foundUser !== null)
        throw new Error('User already exists')

    var user = {}
    user.name = name
    user.email = email
    user.password = password

    users.push(user)

}