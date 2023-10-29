function registerUser(name, email, password) {
    validateText(name, "name")
    validateEmail(email)
    validatePassword(password)

    // search user by email

    var foundUser = find(users, function (user) {
        return user.email === email
    })

    // if user is not founded, then error

    if (foundUser !== undefined)
        throw new Error("User already exists")

    var user = {}
    user.name = name
    user.email = email
    user.password = password

    users.push(user)
}