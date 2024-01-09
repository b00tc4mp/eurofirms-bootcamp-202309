const req = {
    method: 'POST',  // Método de la solicitud: POST (crear un recurso).
    headers: {
        'Content-Type': 'application/json'  // Encabezado que indica el tipo de contenido en el cuerpo de la solicitud.
    },
    body: JSON.stringify({  // Cuerpo de la solicitud en formato JSON, contiene información del nuevo usuario.
        name: 'Ga Yo',
        email: 'ga@yo.com',
        password: '123123123'
    })
}

fetch('http://localhost:4000/users', req)  // Hace una solicitud POST al servidor para crear un nuevo usuario.
    .then(res => {
        if (!res.ok) {  // Si la respuesta del servidor no es exitosa (código de estado diferente de 2xx).
            res.json()  // Convierte el cuerpo de la respuesta a JSON.
                .then(body => console.error(body))  // Muestra el cuerpo de la respuesta en caso de error.
                .catch(error => console.error(error))  // Maneja errores en la conversión a JSON.
            return
        }

        console.log(res.status)  // Muestra el código de estado de la respuesta si la solicitud fue exitosa.
    })
    .catch(error => console.error(error))  // Maneja errores en la ejecución de la solicitud o procesamiento de la respuesta.
