// Importa la biblioteca Mongoose, que nos ayuda a interactuar con una base de datos MongoDB
const mongoose = require('mongoose')

// Desestructura el objeto 'Schema', 'model' y 'Types' de Mongoose para facilitar su uso
const { Schema, model, Types: { ObjectId } } = mongoose

// Crea un esquema para la colección de usuarios en la base de datos
const user = new Schema({
    // Campo 'name' de tipo String, es obligatorio (required) y guarda el nombre del usuario
    name: {
        type: String,
        required: true
    },

    // Campo 'email' de tipo String, es obligatorio, único y guarda el correo electrónico del usuario
    email: {
        type: String,
        required: true,
        unique: true
    },

    // Campo 'password' de tipo String, es obligatorio y guarda la contraseña del usuario
    password: {
        type: String,
        required: true
    },

    // Campo 'saved' de tipo Array de ObjectIds, referencia a la colección de posts que el usuario ha guardado
    saved: {
        type: [ObjectId],
        ref: 'Post'
    }
})

// Crea un esquema para la colección de posts en la base de datos
const post = new Schema({
    // Campo 'author' de tipo ObjectId, referencia al usuario que creó el post
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    // Campo 'image' de tipo String, es obligatorio y guarda la URL de la imagen del post
    image: {
        type: String,
        required: true
    },

    // Campo 'imageDescription' de tipo String, es obligatorio y guarda la descripción de la imagen del post
    imageDescription: {
        type: String,
        required: true
    },

    // Campo 'text' de tipo String, es obligatorio y guarda el contenido del post
    text: {
        type: String,
        required: true
    },

    // Campo 'likes' de tipo Array de ObjectIds, referencia a los usuarios que han dado like al post
    likes: {
        type: [ObjectId],
        ref: 'User'
    }
})

// Crea modelos 'User' y 'Post' a partir de los esquemas anteriores
const User = model('User', user)
const Post = model('Post', post)

// Exporta los modelos para que puedan ser utilizados en otras partes del código
module.exports = {
    User,
    Post
}
