// Importa la biblioteca 'mongoose' para conectarse a la base de datos MongoDB
const mongoose = require('mongoose')

// Importa la función 'toggleLikePost' desde el archivo './toggleLikePost'
const toggleLikePost = require('./toggleLikePost')

// Conecta a la base de datos MongoDB local
mongoose.connect('mongodb://127.0.0.1/test')
    // Cuando la conexión es exitosa
    .then(() => {
        // Intenta realizar lo siguiente
        try {
            // Llama a la función 'toggleLikePost' con los siguientes parámetros: 'userId', 'postId', y una función de 'callback'
            toggleLikePost('6565d569fd874b98654ee32f', '6565d5c37b007c99782d1323', error => {
                // Si hay un error al realizar la acción de 'toggleLikePost', imprime el error en la consola
                if (error) {
                    console.error(error)

                    return
                }

                // Si la acción de 'toggleLikePost' se realiza sin errores, imprime en la consola que se ha "toggled like post"
                console.log('toggled like post')
            })
        } catch (error) {
            // Si hay un error durante la ejecución del bloque 'try', imprime el error en la consola
            console.error(error)
        }
    })
    // Si hay un error al conectarse a la base de datos, imprime el error en la consola
    .catch(error => console.error(error))
