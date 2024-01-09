// Importa la biblioteca 'mongoose' para conectarse a la base de datos MongoDB
const mongoose = require('mongoose')

// Importa la función 'retrievePosts' desde el archivo './retrievePosts'
const retrievePosts = require('./retrievePosts')

// Conecta a la base de datos MongoDB en la dirección 'mongodb://127.0.0.1:27017/test'
mongoose.connect('mongodb://127.0.0.1:27017/test')
    // Después de que la conexión sea exitosa, realiza las siguientes operaciones
    .then(() => {
        // Intenta ejecutar el siguiente bloque de código
        try {
            // Llama a la función 'retrievePosts' con un 'userId' y un 'callback' (una función para manejar el resultado)
            retrievePosts('65608715bab5d765008aa494', (error, posts) => {
                // Si ocurre un error durante la ejecución, imprime el error en la consola
                if (error) {
                    console.error(error)

                    return
                }

                // Si no hay errores, imprime los posts recuperados en la consola
                console.log(posts)
            })
        } catch (error) {
            // Si ocurre un error en el bloque 'try', imprime el error en la consola
            console.error(error)
        }
    })
