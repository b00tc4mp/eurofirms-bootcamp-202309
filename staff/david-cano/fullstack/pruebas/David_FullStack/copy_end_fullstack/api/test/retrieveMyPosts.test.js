const req = {
    method: 'GET',  // Método de la solicitud: GET (obtener información).
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTc1MjNhMmM1YmZkMDU3ZWY1NWE5NzEiLCJpYXQiOjE3MDI1MTg3Mjd9.x_cj7ACxNeJGZPOIycSy6CI87TgXXnV16uq7i8s2s7Y',  // Encabezado con token de autorización.
    },
}

fetch('http://localhost:4000/posts/mine', req)  // Hace una solicitud GET al servidor para obtener los posts del usuario autenticado.
    .then(res => {
        if (!res.ok) {  // Si la respuesta del servidor no es exitosa (código de estado diferente de 2xx).
            res.json()  // Convierte el cuerpo de la respuesta a JSON.
                .then(body => console.error(body))  // Muestra el cuerpo de la respuesta en caso de error.
                .catch(error => console.error(error))  // Maneja errores en la conversión a JSON.
            return
        }

        res.json()  // Convierte el cuerpo de la respuesta a JSON.
            .then(posts => console.log(res.status, posts))  // Muestra el código de estado y los posts en caso de éxito.
            .catch(error => console.error(error))  // Maneja errores en la conversión a JSON.
    })
    .catch(error => console.error(error))  // Maneja errores en la ejecución de la solicitud o procesamiento de la respuesta.
