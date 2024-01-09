const req = { // Objeto que contiene la información para realizar una solicitud HTTP
    method: 'POST', // Método de la solicitud: POST (crear/recuperar datos)
    headers: { // Encabezados de la solicitud
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTc1MjNhMmM1YmZkMDU3ZWY1NWE5NzEiLCJpYXQiOjE3MDI1MTg3Mjd9.x_cj7ACxNeJGZPOIycSy6CI87TgXXnV16uq7i8s2s7Y', // Encabezado de autorización con un token
        'Content-Type': 'application/json' // Tipo de contenido de la solicitud: JSON
    },
    body: JSON.stringify({ // Cuerpo de la solicitud, convierte un objeto JavaScript a una cadena JSON
        image: 'https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg', // URL de la imagen
        imageDescription: 'minion image', // Descripción de la imagen
        text: 'hello minion' // Texto del post
    })
};

fetch('http://localhost:4000/posts', req) // Realiza una solicitud HTTP POST a la URL proporcionada con la información en 'req'
    .then(res => {
        if (!res.ok) { // Si la respuesta no es exitosa (código de estado diferente a 200)
            res.json() // Convierte la respuesta a formato JSON
                .then(body => console.error(body)) // Muestra en la consola el cuerpo de la respuesta (mensaje de error)
                .catch(error => console.error(error)); // Maneja errores al convertir la respuesta a JSON
            return;
        }

        console.log(res.status); // Muestra en la consola el código de estado de la respuesta
    })
    .catch(error => console.error(error)); // Maneja errores generales en la solicitud y muestra el mensaje en la consola
