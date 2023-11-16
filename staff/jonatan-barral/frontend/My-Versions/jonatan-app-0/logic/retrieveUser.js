function retrieveUser(email) {
    var foundUser = find(users, function (user) {
        return user.email === email
    })

    if (foundUser === undefined)
        throw new Error('wrong error')
    return foundUser
}