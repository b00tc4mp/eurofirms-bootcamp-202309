function retrieverUser(email) {
    var foundUser = find(users, function (user) {
        return user.email === email
    })

    if (foundUser === undefined)
        throw new Error('Wrong credentials')
    return foundUser
}