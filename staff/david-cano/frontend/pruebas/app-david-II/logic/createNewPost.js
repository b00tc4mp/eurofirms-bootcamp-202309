function createNewPost(email, image, imageDescription, text){
    // Validar que el email tenga un formato válido
    validateEmail(email)
    // Validar que la URL de la imagen tenga un formato válido
    validateUrl(image, 'image url')
    // Validar que la descripción de la imagen tenga un formato válido
    validateText(imageDescription, 'image description')

  // Validar que el texto de la publicación tenga un formato válido
    validateText(text, 'text')

    //search user by email
    // Buscar al usuario por correo electrónico
    var foundUser = find(users, function (user){
        return user.email === email
    });

    //if user not found then error
    // Si el usuario no se encuentra, lanzar un error
    if(foundUser === undefined)
        throw new Error('User not found (Usuario no encontrado)')

    // Crear un nuevo objeto post de publicación    
    var post = {};
    post.author = email
    post.image = image
    post.imageDescription = imageDescription;
    post.text = text

    // Agregar la nueva publicación a la lista de publicaciones
    posts.push(post)
}