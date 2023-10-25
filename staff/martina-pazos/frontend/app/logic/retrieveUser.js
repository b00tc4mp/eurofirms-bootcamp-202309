function retrieveUser(email) {
    var foundUser = find(users, function (user) {
        return user.email === email
    })

    // if user not found then error

    if (foundUser === undefined)
        throw new Error('Wrong credentials')

    return foundUser
}

