// Importa la librería 'mongoose' para conectarse a la base de datos MongoDB
const mongoose = require('mongoose')

// Importa la función 'updateUserPassword' desde el archivo './updateUserPassword'
const updateUserPassword = require('./updateUserPassword')

// Conecta a la base de datos MongoDB en la dirección 'mongodb://127.0.0.1:27017/test'
mongoose.connect('mongodb://127.0.0.1:27017/test')
    // Una vez que la conexión se establece correctamente
    .then(() => {
        // Intenta ejecutar la función 'updateUserPassword' con ciertos parámetros
        try {
            // Llama a la función 'updateUserPassword' con un ID de usuario, contraseña actual,
            // nueva contraseña y repetición de la nueva contraseña, y un callback para manejar errores
            updateUserPassword('65608715bab5d765008aa494', '123123123', '345345345', '345345345', error => {
                // Si hay un error, imprime el error en la consola
                if (error) {
                    console.error(error)

                    return
                }

                // Si la actualización de la contraseña es exitosa, imprime un mensaje en la consola
                console.log('updated password')
            })
        } catch (error) {
            // Si ocurre un error durante la ejecución, imprime el error en la consola
            console.error(error)
        }
    })
