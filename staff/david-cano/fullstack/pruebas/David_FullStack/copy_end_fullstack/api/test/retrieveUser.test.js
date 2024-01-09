// Crear un objeto de configuración para la solicitud, indicando que se quiere obtener información (GET).
const req = {
    method: 'GET',  // Método de la solicitud: GET (obtener información).
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTc1MjNhMmM1YmFkMDU3ZWY1NWE5NzEiLCJpYXQiOjE3MDI1MTg3Mjd9.x_cj7ACxNeJGZPOIycSy6CI87TgXXnV16uq7i8s2s7Y',  // Encabezado con token de autorización.
    },
}

// Realizar una solicitud GET al servidor para obtener información del usuario.
fetch('http://localhost:4000/users', req)
    .then(res => {
        // Verificar si la respuesta del servidor no es exitosa (código de estado diferente de 2xx).
        if (!res.ok) {
            // Convertir el cuerpo de la respuesta a JSON y mostrarlo en caso de error.
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error))

            return
        }

        // Convertir el cuerpo de la respuesta a JSON y mostrar el código de estado y la información del usuario en caso de éxito.
        res.json()
            .then(body => console.log(res.status, body))
            .catch(error => console.error(error))
    })
    // Manejar errores en la ejecución de la solicitud o procesamiento de la respuesta.
    .catch(error => console.error(error))
