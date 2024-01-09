// Importa el módulo 'mongoose' para conectarse a la base de datos MongoDB
const mongoose = require('mongoose')

// Importa la función 'deletePost' desde el archivo './deletePost'
const deletePost = require('./deletePost')

// Conecta a la base de datos local 'test' en MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        // Intenta realizar la eliminación de una publicación con los IDs de usuario y publicación proporcionados
        try {
            // Llama a la función 'deletePost' con los IDs de usuario y publicación y una función de retorno (callback)
            deletePost('65608715bab5d765008aa494', '6560899f724c642d12657e2b', error => {
                // Verifica si hay algún error durante la eliminación de la publicación
                if (error) {
                    // Muestra el error en la consola
                    console.error(error)

                    // Retorna para salir de la función
                    return
                }

                // Imprime en la consola que la publicación fue eliminada exitosamente
                console.log('deleted')
            })
        } catch (error) {
            // Captura y maneja cualquier error que pueda ocurrir durante el intento de eliminación de la publicación
            console.error(error)
        }
    })
