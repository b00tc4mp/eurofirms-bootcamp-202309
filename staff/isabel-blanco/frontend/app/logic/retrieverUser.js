function retrieverUser(email) {
    validateEmail(email)

    var foundUser = find(users, function (user) {
        return user.email === email
    })

    if (foundUser === undefined)
        throw new Error('wrong credentials')
    return foundUser
}