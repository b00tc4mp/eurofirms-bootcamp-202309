function retrieveUser(userId) {
    validateText(userId)

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('user not found')
    return user
}