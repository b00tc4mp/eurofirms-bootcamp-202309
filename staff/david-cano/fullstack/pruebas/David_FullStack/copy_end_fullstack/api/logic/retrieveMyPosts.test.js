// Importa la biblioteca 'mongoose' para conectarse a la base de datos MongoDB
const mongoose = require('mongoose')

// Importa la función 'retrieveMyPosts' desde el archivo 'retrieveMyPosts'
const retrieveMyPosts = require('./retrieveMyPosts')

// Conecta a la base de datos MongoDB local en el puerto 27017 y usa la base de datos llamada 'test'
mongoose.connect('mongodb://127.0.0.1:27017/test')

    // Si la conexión es exitosa, ejecuta el bloque de código dentro de 'then'
    .then(() => {
        // Intenta ejecutar la función 'retrieveMyPosts' con un 'userId' específico
        try {
            // Llama a la función 'retrieveMyPosts' con un 'userId' y un callback que maneja el resultado o el error
            retrieveMyPosts('6564c1912ba786cec95c7f3f', (error, posts) => {
                // Si hay un error, imprime el error en la consola
                if (error) {
                    console.error(error)

                    return
                }
                // Si no hay errores, imprime los posts en la consola
                console.log(posts)
            })
        } catch (error) {
            // Si ocurre algún error en el bloque try, imprime el error en la consola
            console.error(error)
        }
    })
