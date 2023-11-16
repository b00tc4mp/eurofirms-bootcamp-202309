function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    var foundUser = find(users, function (user) {
        return user.email === email
    })

    if (foundUser === undefined)
        throw new Error('Email is not valid')

    if (foundUser.password !== password)
        throw new Error('Password is not valid')
}