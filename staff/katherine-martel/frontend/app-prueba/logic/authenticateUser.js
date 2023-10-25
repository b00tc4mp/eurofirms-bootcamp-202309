function authenticateUser(email, password) {
    var foundUser = find(users, function (user) {
        return user.email === email
    })

    if (foundUser === undefined)
        throw new Error('wrong credentials')

    if (foundUser.password !== password)
        throw new Error('wrong credentials')

}