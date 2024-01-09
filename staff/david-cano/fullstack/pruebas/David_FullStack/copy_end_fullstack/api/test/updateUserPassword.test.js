// Crear un objeto de configuración para la solicitud, indicando que se quiere modificar información (PATCH).
const req = {
    method: "PATCH",  // Método de la solicitud: PATCH (modificar información).
    headers: {
       "Content-Type": "application/json",  // Indicar que el tipo de contenido es JSON.
       Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y",  // Encabezado con token de autorización.
    },
    // Convertir un objeto JavaScript a una cadena de texto en formato JSON.
    body: JSON.stringify({ password: "123123123", newPassword: "456456456", repeatNewPassword: "456456456" }),
 }

// Realizar una solicitud PATCH al servidor para actualizar la contraseña del usuario.
 fetch("http://localhost:4000/users/password", req)
    .then((res) => {
       // Verificar si la respuesta del servidor no es exitosa (código de estado diferente de 2xx).
       if (!res.ok) {
          // Convertir el cuerpo de la respuesta a JSON y mostrarlo en caso de error.
          res.json()
             .then((body) => console.error(body))
             .catch((error) => console.error(error))
 
          return
       }

       // Mostrar el código de estado y un mensaje indicando que la contraseña se actualizó correctamente.
       console.log(res.status, "updated password")
    })
    // Manejar errores en la ejecución de la solicitud o procesamiento de la respuesta.
    .catch((error) => console.error(error))
