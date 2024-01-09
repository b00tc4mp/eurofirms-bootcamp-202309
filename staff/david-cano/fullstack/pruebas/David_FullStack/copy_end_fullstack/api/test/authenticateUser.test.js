// Crear un objeto 'req' que contiene información para una solicitud HTTP
const req = {
    // Especifica el método de la solicitud como 'POST'
    method: 'POST',

    // Configura los encabezados de la solicitud, indicando que el contenido es JSON
    headers: {
        'Content-Type': 'application/json'
    },

    // Convierte y agrega a 'body' un objeto con el correo electrónico y la contraseña
    body: JSON.stringify({ email: 'pepito@grillo.com', password: '123123123' })
}

// Realiza una solicitud a la URL 'http://localhost:4000/users/authenticate' con la configuración proporcionada en 'req'
fetch('http://localhost:4000/users/authenticate', req)
    .then(res => {
        // Verifica si la respuesta no es exitosa (código de estado no 200)
        if (!res.ok) {
            // Parsea el cuerpo de la respuesta y muestra el error si ocurre
            res.json()
                .then(body => console.error(body))
                .catch(error => console.error(error.message))

            return
        }

        // Si la respuesta es exitosa, parsea el cuerpo de la respuesta y muestra el estado y el cuerpo
        res.json()
            .then(body => console.log(res.status, body))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
