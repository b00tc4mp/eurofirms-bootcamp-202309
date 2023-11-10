function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    // search user by email

    const user = db.findUserByEmail(email)

    // if user not found then error

    if (user === undefined)
        throw new Error("Wrong credentials")

    // if user password is wrong then error

    if (user.password !== password)
        throw new Error("Wrong credentials")

    return user.id
}