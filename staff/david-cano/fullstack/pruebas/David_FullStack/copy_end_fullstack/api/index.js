// Configurar el entorno cargando las variables de entorno desde el archivo .env
require('dotenv').config()

// Importar las librerías necesarias
const express = require('express')
const mongoose = require('mongoose')

// Importar funciones útiles desde el archivo 'utils'
const { cors } = require('./utils')

// Importar funciones manejadoras (handlers) desde el archivo 'handlers'
const {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,
    createPostHandler,
    retrievePostsHandler,
    retrieveSavedPostsHandler,
    retrieveMyPostsHandler,
    toggleLikePostHandler,
    toggleSavePostHandler,
    deletePostHandler,
    updateUserPasswordHandler
} = require('./handlers')

// Conectar a la base de datos MongoDB utilizando la URL proporcionada en las variables de entorno
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        // Crear una aplicación Express para gestionar la API
        const api = express()

        // Definir rutas de ejemplo para saludar
        api.get('/helloworld', (req, res) => res.send('Hello, World!'))

        api.get('/holamundo', (req, res) => res.send('Hola, Mundo!'))

        // Ruta que acepta un parámetro 'name' y responde con un saludo personalizado
        api.get('/hello', (req, res) => {
            const name = req.query.name

            res.send(`Hello, ${name}!`)
        })

        // Configurar un 'middleware' para analizar el cuerpo de las solicitudes en formato JSON
        const jsonBodyParser = express.json()

        // Aplicar el middleware de CORS (Cross-Origin Resource Sharing) para permitir solicitudes desde cualquier origen
        api.use(cors)

        // Definir rutas y vincularlas a las funciones manejadoras correspondientes

        // Rutas relacionadas con usuarios
        api.post('/users', cors, jsonBodyParser, registerUserHandler)
        api.post('/users/authenticate', jsonBodyParser, authenticateUserHandler)
        api.get('/users', retrieveUserHandler)
        api.patch('/users/password', jsonBodyParser, updateUserPasswordHandler)

        // Rutas relacionadas con publicaciones (posts)
        api.post('/posts', jsonBodyParser, createPostHandler)
        api.get('/posts', retrievePostsHandler)
        api.get('/posts/saved', retrieveSavedPostsHandler)
        api.get('/posts/mine', retrieveMyPostsHandler)
        api.patch('/posts/:postId/likes', toggleLikePostHandler)
        api.patch('/posts/:postId/saved', toggleSavePostHandler)
        api.delete('/posts/:postId', deletePostHandler)

        // Iniciar el servidor de la API en el puerto definido en las variables de entorno
        api.listen(process.env.PORT, () => console.log(`API listening on port ${process.env.PORT}`))
    })
