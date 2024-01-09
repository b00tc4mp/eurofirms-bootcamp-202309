curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkYjlmYThmZDZkNjU4MTkzZGMxNzYiLCJpYXQiOjE3MDI0NjU4MjN9.TybzUcO2lvt1Tsr2f30jS_ANzkCCAGvpcF_d-Bbb85M' \  # Encabezado de autorización con un token
     -H 'Content-Type: application/json' \  # Tipo de contenido de la solicitud: JSON
     -d '{ "image": "https://thispersondoesnotexist.com", "imageDescription": "Unknown person", "text": "Who is this?" }' \  # Cuerpo de la solicitud, datos del post en formato JSON
     localhost:4000/posts -v  # Realiza una solicitud HTTP POST a la URL localhost:4000/posts y muestra información detallada (-v) sobre la solicitud y la respuesta

# > POST /posts HTTP/1.1  # Método de la solicitud y ruta
# > Host: localhost:4000  # Nombre del host al que se realiza la solicitud
# > User-Agent: curl/8.1.2  # Identificación del agente de usuario (curl y su versión)
# > Accept: */*  # Tipo de contenido aceptado en la respuesta
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkYjlmYThmZDZkNjU4MTkzZGMxNzYiLCJpYXQiOjE3MDI0NjU4MjN9.TybzUcO2lvt1Tsr2f30jS_ANzkCCAGvpcF_d-Bbb85M  # Encabezado de autorización con un token
# > Content-Type: application/json  # Tipo de contenido de la solicitud: JSON
# > Content-Length: 111  # Longitud del cuerpo de la solicitud

# < HTTP/1.1 201 Created  # Versión de HTTP y código de estado de la respuesta
# < X-Powered-By: Express  # Información adicional sobre el servidor
# < Date: Thu, 30 Nov 2023 11:04:07 GMT  # Fecha y hora de la respuesta
# < Connection: keep-alive  # Información sobre la conexión
# < Keep-Alive: timeout=5  # Configuración de tiempo de espera para mantener la conexión
# < Content-Length: 0  # Longitud del cuerpo de la respuesta (en este caso, 0 porque no hay contenido en la respuesta)
