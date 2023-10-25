function registerUser(name, email, password) {
    // search user by email 

    var foundUser = null

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }

    //if user exists (it was found) then error

    if (foundUser !== null)
        throw new Error('User already exists')

    var user = {}
    user.name = name
    user.email = email
    user.password = password

    user.push(user)
}



