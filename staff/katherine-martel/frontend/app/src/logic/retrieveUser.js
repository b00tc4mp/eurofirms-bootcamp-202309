function retrieveUser(email) {
    validateEmail(email)

    const user = db.findUserById(userId)

    if (!user)
        throw new Error('User not found')

    return user
}



