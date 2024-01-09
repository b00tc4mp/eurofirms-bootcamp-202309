// Importa la biblioteca 'mongoose' para conectarse a la base de datos MongoDB
const mongoose = require('mongoose')

// Importa la función 'retrieveUser' desde el archivo './retrieveUser'
const retrieveUser = require('./retrieveUser')

// Conecta a la base de datos MongoDB en la dirección 'mongodb://127.0.0.1:27017/test'
mongoose.connect('mongodb://127.0.0.1:27017/test')
    // Cuando la conexión es exitosa
    .then(() => {
        // Intenta realizar la operación para recuperar un usuario por su 'userId'
        try {
            // Llama a la función 'retrieveUser' con un 'userId' y una función de retorno (callback)
            retrieveUser('65608715bab5d765008aa494', (error, user) => {
                // Si hay un error, imprímelo en la consola y termina la ejecución
                if (error) {
                    console.error(error)
                    return
                }

                // Si la operación es exitosa, imprime el usuario recuperado en la consola
                console.log(user)
            })
        } catch (error) {
            // Si hay un error durante el intento, imprímelo en la consola
            console.error(error)
        }
    })
