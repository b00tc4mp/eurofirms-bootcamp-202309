// Importa la librería 'mongoose' para conectarse a la base de datos MongoDB
const mongoose = require('mongoose')

// Importa la función 'updateUserEmail' desde el archivo './updateUserEmail'
const updateUserEmail = require('./updateUserEmail')

// Conecta a la base de datos local 'test' en MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        // Intenta realizar la actualización del correo electrónico del usuario
        try {
            // Llama a la función 'updateUserEmail' con los parámetros necesarios
            updateUserEmail('65649f8a2d3a0de8e571532d', '123123123', 'shakti@maan.com', 'shakti2@maan.com', 'shakti2@maan.com', error  => {
                // Si ocurre un error durante la actualización, imprímelo en la consola
                if (error) {
                    console.error(error)

                    return
                }

                // Si la actualización se realiza con éxito, imprime un mensaje en la consola
                console.log('updated email')
            })
        } catch (error) {
            // Si hay un error en la ejecución, imprímelo en la consola
            console.error(error)
        }
    })
