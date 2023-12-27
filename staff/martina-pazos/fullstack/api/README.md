



__________________
_
# API

## Endpoints

#### Register a user

```
Request: POST /users { name, email, password }
Response: 201
```

Examples:

```sh
$ curl -H 'Content-Type: application/json' -d '{ "name": "Wendy Darling", "email": "wendy@darling.com", "password": "123123123" }' -X POST localhost:4000/users -i

HTTP/1.1 201 Created
X-Powered-By: Express
Date: Wed, 29 Nov 2023 12:16:41 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 0
```

```sh
$ curl -H 'Content-Type: application/json' -d '{ "name": "Peter Pan", "email": "peter@pan.com", "password": "123123123" }' -X POST localhost:4000/users -i 

HTTP/1.1 201 Created
X-Powered-By: Express
Date: Wed, 29 Nov 2023 12:16:57 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 0
```

#### Authenticate a user

```
Request: POST /users/auth { email, password }
Response: 200 { userId: '65672ba9655f6f69eed56fd5' }
```

Examples:

TODO create curl calls examples