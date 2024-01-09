// Importa la biblioteca 'jsonwebtoken' para manejar la creación de tokens JWT (JSON Web Tokens)
const jwt = require('jsonwebtoken')

// Importa la lógica del negocio y las clases de errores desde archivos externos
const logic = require('../logic')
const { ContentError, CredentialsError } = require('../logic/errors')

// Exporta una función que maneja la autenticación de usuarios cuando llega una solicitud HTTP
module.exports = (req, res) => {
    try {
        // Extrae el correo electrónico y la contraseña desde el cuerpo (body) de la solicitud
        const { email, password } = req.body

        // Llama a la función 'authenticateUser' de la lógica de negocio para autenticar al usuario
        logic.authenticateUser(email, password, (error, userId) => {
            // Si hay un error durante la autenticación, maneja diferentes tipos de errores
            if (error) {
                let status = 500

                // Si el error es de tipo 'CredentialsError', establece el estado a 401 (No autorizado)
                if (error instanceof CredentialsError)
                    status = 401

                // Envía una respuesta con el código de estado y un mensaje de error en formato JSON
                res.status(status).json({ error: error.constructor.name, message: error.message })

                // Sale de la función
                return
            }

            // Si la autenticación es exitosa, crea un token JWT con el ID del usuario y una clave secreta
            const token = jwt.sign({ sub: userId }, process.env.JWT_SECRET, { expiresIn: '3m' })

            // Envía el token en formato JSON como respuesta
            res.json(token)
        })
    } catch (error) {
        let status = 500

        // Maneja diferentes tipos de errores (TypeError, ContentError, RangeError)
        if (error instanceof TypeError || error instanceof ContentError || error instanceof RangeError)
            status = 406

        // Envía una respuesta con el código de estado y un mensaje de error en formato JSON
        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}
