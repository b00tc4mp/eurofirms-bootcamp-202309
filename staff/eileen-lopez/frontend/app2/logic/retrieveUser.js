function retrieveUser(email) {
    var foundUSer = find(users,  function (user){
        return user.email === email
    })

    // if user not found then error

    if (foundUser === undefined)
        throw new Error ('Wrong credentials')

    return foundUser
}