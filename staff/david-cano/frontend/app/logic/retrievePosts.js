function retrievePosts(email){
    validateEmail(email)

    //Search user by email
    var foundUser = find(users, function (user){
        return user.email === email
    })

    //If user not found then error
    if(foundUser === undefined)
        throw new Error('User not found')

    return posts
}