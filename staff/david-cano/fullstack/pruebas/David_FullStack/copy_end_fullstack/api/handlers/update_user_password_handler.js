// Importa la biblioteca 'jsonwebtoken' para manejar la verificación y creación de tokens JWT (JSON Web Tokens)
const jwt = require('jsonwebtoken')

// Importa la lógica del negocio y las clases de errores desde archivos externos
const logic = require('../logic')
const { ContentError, NotFoundError, CredentialsError } = require('../logic/errors')

// Exporta una función que maneja la acción de actualizar la contraseña de un usuario cuando llega una solicitud HTTP
module.exports = (req, res) => {
    try {
        // Extrae el token de autorización del encabezado (headers) de la solicitud y elimina el prefijo 'Bearer '
        const token = req.headers.authorization.slice(7)

        // Verifica y decodifica el token para obtener el ID del usuario (sub)
        const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

        // Extrae los datos relacionados con la actualización de la contraseña desde el cuerpo (body) de la solicitud
        const { password, newPassword, repeatNewPassword } = req.body

        // Llama a la función 'updateUserPassword' de la lógica de negocio para actualizar la contraseña del usuario
        logic.updateUserPassword(userId, password, newPassword, repeatNewPassword, error => {
            // Si hay un error al actualizar la contraseña, maneja diferentes tipos de errores
            if (error) {
                let status = 500

                // Si el error es de tipo 'NotFoundError', establece el estado a 404 (No encontrado)
                if (error instanceof NotFoundError)
                    status = 404
                // Si el error es de tipo 'CredentialsError', establece el estado a 401 (Credenciales incorrectas)
                else if (error instanceof CredentialsError)
                    status = 401

                // Envía una respuesta con el código de estado y un mensaje de error en formato JSON
                res.status(status).json({ error: error.constructor.name, message: error.message })

                // Sale de la función
                return
            }

            // Si la actualización de la contraseña es exitosa, envía una respuesta con el código de estado 204 (Sin contenido)
            res.status(204).send()
        })
    } catch (error) {
        let status = 500

        // Maneja diferentes tipos de errores (TypeError, ContentError, RangeError, JsonWebTokenError)
        if (error instanceof TypeError || error instanceof ContentError || error instanceof RangeError)
            status = 406
        else if (error instanceof jwt.JsonWebTokenError)
            status = 401

        // Envía una respuesta con el código de estado y un mensaje de error en formato JSON
        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}
