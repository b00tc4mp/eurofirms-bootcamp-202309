function retrieveUser(userId) {
    validateText(userId, 'user id')

    const user = db.findUserById(userId)

    if (user === null)
        throw new Error('User not found')

    return user
}