// Crear una función llamada "cors" que acepta las peticiones (req), las respuestas (res), y una función "next".
const cors = (req, res, next) => {
    // Configurar el encabezado en la respuesta para permitir el acceso desde cualquier origen ('*').
    res.header('Access-Control-Allow-Origin', '*')
    // Configurar el encabezado en la respuesta para permitir cualquier método de solicitud.
    res.header('Access-Control-Allow-Methods', '*')
    // Configurar el encabezado en la respuesta para permitir ciertos encabezados, como Authorization y cualquier otro (*).
    res.header('Access-Control-Allow-Headers', 'Authorization, *')

    // Llamar a la función "next" para pasar al siguiente paso en el manejo de la solicitud.
    next()
}

// Exportar la función "cors" para que pueda ser utilizada en otros archivos.
module.exports = cors
