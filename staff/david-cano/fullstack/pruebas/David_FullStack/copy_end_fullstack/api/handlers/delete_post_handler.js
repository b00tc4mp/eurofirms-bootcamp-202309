// Importa la biblioteca 'jsonwebtoken' para manejar la verificación y creación de tokens JWT (JSON Web Tokens)
const jwt = require('jsonwebtoken')

// Importa la lógica del negocio y las clases de errores desde archivos externos
const logic = require('../logic')
const { ContentError, NotFoundError, ClearanceError } = require('../logic/errors')

// Exporta una función que maneja la eliminación de una publicación cuando llega una solicitud HTTP
module.exports = (req, res) => {
    try {
        // Extrae el token de autorización del encabezado (headers) de la solicitud y elimina el prefijo 'Bearer '
        const token = req.headers.authorization.slice(7)

        // Verifica y decodifica el token para obtener el ID del usuario (sub)
        const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

        // Extrae el identificador de la publicación (postId) de los parámetros de la solicitud
        const postId = req.params.postId

        // Llama a la función 'deletePost' de la lógica de negocio para eliminar una publicación
        logic.deletePost(userId, postId, error => {
            // Si hay un error al eliminar la publicación, maneja diferentes tipos de errores
            if (error) {
                let status = 500

                // Si el error es de tipo 'NotFoundError', establece el estado a 404 (No encontrado)
                if (error instanceof NotFoundError)
                    status = 404
                // Si el error es de tipo 'ClearanceError', establece el estado a 403 (Prohibido)
                else if (error instanceof ClearanceError)
                    status = 403

                // Envía una respuesta con el código de estado y un mensaje de error en formato JSON
                res.status(status).json({ error: error.constructor.name, message: error.message })

                // Sale de la función
                return
            }

            // Si la eliminación de la publicación es exitosa, envía una respuesta con el código de estado 204 (Sin contenido)
            res.status(204).send()
        })
    } catch (error) {
        let status = 500

        // Maneja diferentes tipos de errores (TypeError, ContentError, JsonWebTokenError)
        if (error instanceof TypeError || error instanceof ContentError)
            status = 406
        else if (error instanceof jwt.JsonWebTokenError)
            status = 401

        // Envía una respuesta con el código de estado y un mensaje de error en formato JSON
        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}
