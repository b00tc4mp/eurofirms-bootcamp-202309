function changeEmail(userId, email, newEmail, password) {
    validateText(userId)
    validateEmail(email)
    validateEmail(newEmail)
    validatePassword(password)

    if (email === newEmail)
        throw new Error('new email must be different than the actual')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('User dont found')

    if (user.email !== email)
        throw new Error('Wrong credentials')

    if (user.password !== password)
        throw new Error('Wrong credentials')

    const userWithNewEmail = db.findUserByEmail(newEmail)

    if (userWithNewEmail) {
        throw new Error('Email already in use');
    }

    user.email = newEmail;

    db.updateUser(user);
}