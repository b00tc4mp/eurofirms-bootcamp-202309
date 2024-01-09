// Importa la biblioteca 'mongoose' para conectarse a una base de datos MongoDB
const mongoose = require('mongoose')

// Importa la función 'authenticateUser' desde el archivo './authenticateUser'
const authenticateUser = require('./authenticateUser')

// Conecta a la base de datos MongoDB en la dirección 'mongodb://127.0.0.1:27017/test'
mongoose.connect('mongodb://127.0.0.1:27017/test')
    // Maneja la promesa de conexión exitosa
    .then(() => {
        // Intenta autenticar a un usuario con el correo electrónico 'shakti@maan.com' y la contraseña '123123123'
        try {
            // Llama a la función 'authenticateUser' con el correo electrónico, contraseña y un callback para manejar el resultado
            authenticateUser('shakti@maan.com', '123123123', (error, userId) => {
                // Verifica si ocurrió un error durante la autenticación
                if (error) {
                    // Imprime el error en la consola
                    console.error(error)

                    // Retorna para salir de la función
                    return
                }

                // Imprime en la consola que el usuario ha sido autenticado junto con el identificador del usuario
                console.log('user authenticated', userId)
            })
        } catch (error) {
            // Captura y maneja cualquier error que pueda ocurrir durante el intento de autenticación
            console.error(error)
        }
    })
