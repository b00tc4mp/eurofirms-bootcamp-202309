function retrieveUser(userId) {
    validateText(userId, 'user id')

    const user = db.findUserById(userId)

    if (!user)
        throw new Error ('Wrong credentials')

    return user
}