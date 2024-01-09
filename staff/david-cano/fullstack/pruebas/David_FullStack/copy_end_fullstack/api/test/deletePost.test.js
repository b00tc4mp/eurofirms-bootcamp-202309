const req = {
    method: 'DELETE',  // Configuración del método HTTP DELETE para solicitar la eliminación de recursos
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTc1MjNhMmM1YmZkMDU3ZWY1NWE5NzEiLCJpYXQiOjE3MDI1MTg3Mjd9.x_cj7ACxNeJGZPOIycSy6CI87TgXXnV16uq7i8s2s7Y'  // Configuración del encabezado de autorización con un token JWT
    }
}

fetch('http://localhost:4000/posts/6571b5754fba0c76963acd33', req)  // Envío de una solicitud DELETE al servidor para eliminar un recurso específico
    .then(res => {
        if (!res.ok) {  // Verificación si la respuesta indica un error
            res.json()  // Parseo del cuerpo de la respuesta como JSON
                .then(body => console.error(body))  // Impresión del cuerpo del error en la consola
                .catch(error => console.error(error))  // Manejo de errores al parsear el JSON
            return
        }

        console.log(res.status)  // Impresión del código de estado de la respuesta en la consola
    })
    .catch(error => console.error(error))  // Manejo de errores en la solicitud o procesamiento de la respuesta
