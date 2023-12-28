// Importa los módulos necesarios para crear la aplicación web y trabajar con MongoDB.
const express = require('express');
const mongoose = require('mongoose');

// Importa las funciones de lógica para el registro, autenticación y recuperación de usuarios.
const registerUser = require('./logic/registerUser');
const authenticateUser = require('./logic/authenticateUser');
const retrieveUser = require('./logic/retrieveUser');

// Conecta a la base de datos MongoDB.
mongoose.connect('mongodb://127.0.0.1/api')
    .then(() => {
        // Crea una instancia de la aplicación Express.
        const api = express();

        // Define rutas para endpoints básicos.
        api.get('/helloworld', (req, res) => {
            res.send('Hello, World!');
        });

        api.get('/holamundo', (req, res) => {
            res.send('Hola, Mundo!');
        });

        api.get('/hello', (req, res) => {
            // Extrae el parámetro 'name' de la consulta.
            const name = req.query.name;
            res.send(`Hello, ${name}!`);
        });

        // Configura el middleware para analizar el cuerpo de las solicitudes en formato JSON.
        const jsonBodyParser = express.json();

        // Define una ruta para el registro de usuarios.
        api.post('/users', jsonBodyParser, (req, res) => {
            // Extrae el cuerpo de la solicitud.
            const body = req.body;
            // Extrae campos específicos del cuerpo de la solicitud.
            const { name, email, password } = body;

            try {
                // Llama a la función 'registerUser' con los datos proporcionados.
                registerUser(name, email, password, error => {
                    // Maneja errores devueltos por 'registerUser'.
                    if (error) {
                        res.status(400).json({ error: error.message });
                        return;
                    }

                    // En caso de éxito, devuelve un código de estado 201 (Creado).
                    res.status(201).send();
                });
            } catch (error) {
                // Captura y maneja cualquier error que ocurra durante el proceso de registro.
                res.status(400).json({ error: error.message });
            }
        });

        // Define la ruta para la autenticación de usuarios.
        api.post('/users/authenticate', jsonBodyParser, (req, res) => {
            // Extrae el cuerpo de la solicitud.
            const body = req.body;
            // Extrae campos específicos del cuerpo de la solicitud.
            const { email, password } = body;

            try {
                // Llama a la función 'authenticateUser' con el email y la contraseña proporcionados.
                authenticateUser(email, password, (error, userId) => {
                    // Maneja errores devueltos por 'authenticateUser'.
                    if (error) {
                        res.status(400).json({ error: error.message });
                        return;
                    }

                    // Si la autenticación es exitosa, devuelve el ID del usuario en formato JSON.
                    res.json(userId);
                });
            } catch (error) {
                // Captura y maneja cualquier error que ocurra durante el proceso de autenticación.
                res.status(400).json({ error: error.message });
            }
        });

        // Define una ruta para recuperar la información de un usuario.
        api.post('/users', (req, res) => {
            // Extrae el ID del usuario del encabezado 'Authorization'.
            const userId = req.headers.authorization.slice(7);

            try {
                // Llama a la función 'retrieveUser' con el ID del usuario.
                retrieveUser(userId, (error, user) => {
                    // Maneja errores devueltos por 'retrieveUser'.
                    if (error) {
                        res.status(400).json({ error: error.message });
                        return;
                    }

                    // Si la recuperación es exitosa, devuelve la información del usuario en formato JSON.
                    res.json(user);
                });
            } catch (error) {
                // Captura y maneja cualquier error que ocurra durante el proceso de recuperación de usuario.
                res.status(400).json({ error: error.message });
            }
        });

        // Inicia la aplicación Express en el puerto 4000.
        api.listen(4000, () => console.log('API listening on port 4000'));
    });
