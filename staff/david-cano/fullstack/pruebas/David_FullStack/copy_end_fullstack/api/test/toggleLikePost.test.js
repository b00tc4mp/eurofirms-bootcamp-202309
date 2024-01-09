// Crear un objeto de configuración para la solicitud, indicando que se quiere modificar información (PATCH).
const req = {
    method: 'PATCH',  // Método de la solicitud: PATCH (modificar información).
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTc1MjNhMmM1YmFkMDU3ZWY1NWE5NzEiLCJpYXQiOjE3MDI1MTg3Mjd9.x_cj7ACxNeJGZPOIycSy6CI87TgXXnV16uq7i8s2s7Y',  // Encabezado con token de autorización.
    }
}

// Realizar una solicitud PATCH al servidor para indicar que le gustó a alguien una publicación específica.
fetch('http://localhost:4000/posts/65686c275ef8e443ccc48336/likes', req)
    .then(res => {
        // Verificar si la respuesta del servidor no es exitosa (código de estado diferente de 2xx).
        if (!res.ok) {
            // Convertir el cuerpo de la respuesta a JSON y mostrarlo en caso de error.
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        // Mostrar el código de estado en caso de éxito.
        console.log(res.status)
    })
    // Manejar errores en la ejecución de la solicitud o procesamiento de la respuesta.
    .catch(error => console.error(error))
