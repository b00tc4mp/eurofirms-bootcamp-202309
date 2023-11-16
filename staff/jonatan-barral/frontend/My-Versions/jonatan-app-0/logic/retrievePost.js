function retrievePosts(email) {
    validateEmail(email)

    var foundUser = find(users, function (user) {
        return user.email === email
    })
    if (foundUser === undefined) throw new Error('User not found')

    return posts
}