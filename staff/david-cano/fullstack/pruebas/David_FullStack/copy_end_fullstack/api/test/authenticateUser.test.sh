curl -H 'Content-Type: application/json' -d '{ "email": "wendy@darling.com", "password": "123123123" }' localhost:9000/users/auth -v

# Envia una solicitud curl al servidor localhost:9000 para autenticar a un usuario
# -H indica el encabezado, estableciendo el tipo de contenido como 'application/json'
# -d indica los datos que se envían en el cuerpo de la solicitud, que es un objeto JSON con un correo electrónico y una contraseña
# localhost:9000/users/auth es la URL del servidor y la ruta para la autenticación
# -v activa el modo verbose para mostrar detalles de la solicitud y la respuesta

# > POST /users/auth HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 57

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 26
# < ETag: W/"1a-4WuddfhLqLCLfYD8xDO24rc4iUU"
# < Date: Thu, 30 Nov 2023 09:32:15 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5 

# La respuesta contiene un token JWT que puede ser utilizado para autenticación posterior
# "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkYjlmYThmZDZkNjU4MTkzZGMxNzYiLCJpYXQiOjE3MDI0NjU4MjN9.TybzUcO2lvt1Tsr2f30jS_ANzkCCAGvpcF_d-Bbb85M"
