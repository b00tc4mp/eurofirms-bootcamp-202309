function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    const user = db.findUserByEmail(email)

    if (user === undefined)
        throw new Error('Wrong credentials')

    if (user.password !== password)
        throw new Error('Wrong credentials')
}