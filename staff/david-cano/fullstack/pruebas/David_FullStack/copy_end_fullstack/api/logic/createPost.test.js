// Importa la biblioteca 'mongoose' para conectarse a una base de datos MongoDB
const mongoose = require('mongoose')

// Importa la función 'createPost' desde el archivo './createPost'
const createPost = require('./createPost')

// Conecta a la base de datos MongoDB en la dirección 'mongodb://127.0.0.1:27017/test'
mongoose.connect('mongodb://127.0.0.1:27017/test')
    // Maneja la promesa de conexión exitosa
    .then(() => {
        // Intenta crear una publicación en la base de datos con información específica
        try {
            // Llama a la función 'createPost' con el ID de usuario, URL de imagen, descripción de imagen y texto de la publicación
            createPost('65608715bab5d765008aa494', 'https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg', 'minio image', 'hello minio', error => {
                // Verifica si ocurrió un error durante la creación de la publicación
                if (error) {
                    // Imprime el error en la consola
                    console.error(error)

                    // Retorna para salir de la función
                    return
                }

                // Imprime en la consola que la publicación ha sido creada con éxito
                console.log('created')
            })
        } catch (error) {
            // Captura y maneja cualquier error que pueda ocurrir durante el intento de creación de la publicación
            console.error(error)
        }
    })
