// esto sale de la home, se hace para validar el email del usuario de la app (ctas más medidas de seguridad protejan los datos, es mejor )
function retrievePosts(email) {
    validateEmail(email)

    // search user by email

    var foundUser = find(users, function (user) {
        return user.email === email
    })

    // if user not found then error

    if (foundUser === undefined)
        throw new Error('User not found')

    return posts
}
