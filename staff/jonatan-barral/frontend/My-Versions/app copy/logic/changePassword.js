function changePassword(userId, password, newPassword, repeatNewPassword) {
    validateText(userId)
    validatePassword(password)
    validatePassword(newPassword)
    validatePassword(repeatNewPassword)

    if (newPassword !== repeatNewPassword) {
        throw new Error('passwords must coincide')
    }

    const user = db.findUserById(userId)
    if (!user) {
        throw new Error('User not found')
    }

    if (user.password !== password) {
        throw new Error('wrong password')
    }

    user.password = newPassword

    db.updateUser(user)
}