// Importa la lógica del negocio y las clases de errores desde archivos externos
const logic = require('../logic')
const { ContentError, DuplicityError } = require('../logic/errors')

// Exporta una función que maneja el registro de un nuevo usuario cuando llega una solicitud HTTP
module.exports = (req, res) => {
    try {
        // Extrae el nombre, correo electrónico y contraseña desde el cuerpo (body) de la solicitud
        const { name, email, password } = req.body

        // Llama a la función 'registerUser' de la lógica de negocio para registrar a un nuevo usuario
        logic.registerUser(name, email, password, error => {
            // Si hay un error durante el registro, maneja diferentes tipos de errores
            if (error) {
                let status = 500

                // Si el error es de tipo 'DuplicityError', establece el estado a 409 (Conflicto)
                if (error instanceof DuplicityError)
                    status = 409

                // Envía una respuesta con el código de estado y un mensaje de error en formato JSON
                res.status(status).json({ error: error.constructor.name, message: error.message })

                // Sale de la función
                return
            }

            // Si el registro es exitoso, envía una respuesta con el código de estado 201 (Creado)
            res.status(201).send()
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
