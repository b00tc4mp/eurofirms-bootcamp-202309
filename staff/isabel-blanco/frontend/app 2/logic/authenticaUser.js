function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    const user = db.findUserByEmail(email)

    if (!user)
        throw new Error('wrong credentials')

    if (user.password !== password)
        throw new Error('wrong credentials')

    return user.id

}