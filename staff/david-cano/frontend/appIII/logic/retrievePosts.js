function retrievePosts(email){
    validateEmail(email)

    // search user by email

    var foundUser = find(users, function (user){
        return user.email === email
    })

    // if user not found then error

    if(foundUser === undefined)
        throw new Error('User not found')

    return posts
}