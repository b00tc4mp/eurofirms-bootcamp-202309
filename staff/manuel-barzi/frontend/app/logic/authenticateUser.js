function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    // search user by email

    var foundUser = find(users, function (user) {
        return user.email === email
    })

    // if user not found then error

    if (foundUser === undefined)
        throw new Error('Wrong credentials')

    // if user password is wrong then error

    if (foundUser.password !== password)
        throw new Error('Wrong credentials')
}