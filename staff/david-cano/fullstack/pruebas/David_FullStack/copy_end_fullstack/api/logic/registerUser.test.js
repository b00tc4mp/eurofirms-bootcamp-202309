// Importa el módulo 'mongoose' para conectarse a la base de datos MongoDB
const mongoose = require('mongoose')

// Importa la función 'registerUser' desde el archivo 'registerUser'
const registerUser = require('./registerUser')

// Conecta con la base de datos MongoDB usando la URL proporcionada
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {  // Cuando la conexión es exitosa, ejecuta la siguiente función
        try {
            // Intenta registrar un nuevo usuario con nombre, email y contraseña proporcionados
            registerUser('Shakti Maan', 'shakti@maan.com', '123123123', error => {
                if (error) {
                    // Si hay un error al registrar al usuario, imprime el error en la consola
                    console.error(error)

                    return
                }

                // Si el registro es exitoso, imprime en la consola que el usuario ha sido registrado
                console.log('user registered')
            })
        } catch (error) {
            // Si hay un error durante el proceso, imprime el error en la consola
            console.error(error)
        }
    })
