// Importa la biblioteca 'mongoose' para conectarse a la base de datos MongoDB
const mongoose = require('mongoose')

// Importa la función 'toggleSavePost' desde el archivo './toggleSavePost'
const toggleSavePost = require('./toggleSavePost')

// Establece la conexión a la base de datos MongoDB en el servidor local en el puerto 27017
mongoose.connect('mongodb://127.0.0.1/test')
    // Una vez que la conexión se ha establecido correctamente, ejecuta la función de retorno
    .then(() => {
        // Intenta realizar la acción de toggleSavePost con los siguientes parámetros
        try {
            // Llama a la función 'toggleSavePost' con los IDs de usuario y post, y una función de retorno
            toggleSavePost('65608715bab5d765008aa494', '6560899f724c642d12657e2b', error => {
                // Si se produce un error, imprímelo en la consola
                if (error) {
                    console.error(error)
                    return
                }

                // Si la acción se realiza correctamente, imprime un mensaje indicando que el post ha sido guardado o eliminado
                console.log('toggled save post')
            })
        } catch (error) {
            // Si se produce un error durante la ejecución, imprímelo en la consola
            console.error(error)
        }
    })
