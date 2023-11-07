//se basa en home, es la validación de los datos (email, image, descripcion... ), del usuario para poder publicar un post 

function createNewPost(userId, image, imageDescription, text) {
    validateText(userId, 'user id')
    validateUrl(image, 'image url')
    validateText(imageDescription, 'image decription')
    validateText('text)')

    // search user by email. Recordemos el método find: el método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

    const user = db.findUserById(userId)



    //if user no found ther error
    if (!User)
        throw new Error('User not found')

    db.createNewPost(userId, image, imageDescription, text)

}

