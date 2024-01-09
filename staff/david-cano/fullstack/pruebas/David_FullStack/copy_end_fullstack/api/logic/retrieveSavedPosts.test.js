// Importa la biblioteca 'mongoose' para conectarse a la base de datos MongoDB
const mongoose = require('mongoose')

// Importa la función 'retrieveSavedPosts' desde el archivo './retrieveSavedPosts'
const retrieveSavedPosts = require('./retrieveSavedPosts')

// Conecta a la base de datos MongoDB en la dirección 'mongodb://127.0.0.1:27017/test'
mongoose.connect('mongodb://127.0.0.1:27017/test')

    // Cuando la conexión a la base de datos es exitosa
    .then(() => {
        // Intenta ejecutar la siguiente sección de código
        try {
            // Llama a la función 'retrieveSavedPosts' con un 'userId' y un 'callback'
            retrieveSavedPosts('6560873e8f3518573cbf334c', (error, posts) => {
                // Si hay un error, imprímelo en la consola
                if (error) {
                    console.error(error)

                    return
                }
                // Si no hay errores, imprime los posts recuperados en la consola
                console.log(posts)
            })
        }
        // Si hay algún error durante la ejecución, imprímelo en la consola
        catch (error) {
            console.error(error)
        }
    })
