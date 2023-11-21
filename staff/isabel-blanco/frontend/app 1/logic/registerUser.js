function registerUser(name, email, password) {
    validateText(name, 'name')
    validateEmail(email)
    validatePassword(password)

    //search user by email

    var foundUser = find(users, function (user) {
        return user.email === email
    })

    //if user exists (it was found) the error

    if (foundUser !== undefined) {
        throw new Error('User alredy exists')
    }

    var user = {}
    user.name = name
    user.email = email
    user.password = password

    users.push(user)

}