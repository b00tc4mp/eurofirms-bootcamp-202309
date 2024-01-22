curl -H 'Content-Type: application/json' -d '{ "name": "Wendy Darling", "email": "wendy@darling.com", "password": "123123123" }' localhost:4000/users -v

# > POST /users HTTP/1.1
# > Host: localhost:4000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 82
 
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Thu, 30 Nov 2023 08:46:00 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0