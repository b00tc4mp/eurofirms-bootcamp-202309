function changeEmail(sessionUserId, newEmail, password) {
    validateEmail(newEmail)
    validatePassword(password)

    const user = db.findUserByEmail(newEmail)

    if (user)
        throw new Error('User already exists')



    if (!user) {
        throw new Error('User not found');
    }

    if (user.password !== password) {
        throw new Error('Wrong password');
    }

    const existingNewEmail = db.findUserByEmail(newEmail)
    if (existingNewEmail && existingNewEmail.id !== userId) {
        throw new Error('Email already in use');
    }

    user.email = newEmail;

    db.updateUser(user);

    return 'Email changed successfully';
}