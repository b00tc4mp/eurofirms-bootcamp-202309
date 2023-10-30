function registerUser(name, email, password){
    validateText(name, 'name')
    validateEmail(email)
    validatePassword(password)

    //Search user by email
    var foundUser = find(users, function (user){
        return user.email === email
    })

    //If user found then error
    if(foundUser !== undefined)
        throw new Error('User already exists')

    var user = {}
    user.name = name
    user.email = email
    user.password = password

    users.push(user)
}