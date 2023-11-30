# API

## Installation

```sh
$ pnpm i
```

## Boot

```sh
$ pnpm start
```

## Endpoints

#### Register a user

```
Request: POST /users { name, email, password }
Response: 201
```

Examples:

```sh
$ curl -H 'Content-Type: application/json' -d '{ "name": "Wendy Darling", "email": "wendy@darling.com", "password": "123123123" }' localhost:4000/users -v

> POST /users HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Content-Type: application/json
> Content-Length: 82
 
< HTTP/1.1 201 Created
< X-Powered-By: Express
< Date: Thu, 30 Nov 2023 08:46:00 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Content-Length: 0
```

```sh
$ curl -H 'Content-Type: application/json' -d '{ "name": "Peter Pan", "email": "peter@pan.com", "password": "123123123" }' localhost:4000/users -v 

> POST /users HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Content-Type: application/json
> Content-Length: 74

< HTTP/1.1 201 Created
< X-Powered-By: Express
< Date: Thu, 30 Nov 2023 08:49:11 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Content-Length: 0
```

```sh
curl -H 'Content-Type: application/json' -d '{ "name": "Peter Pan", "email": "peter@pan.com", "password": "123123123" }' localhost:4000/users -v

> POST /users HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Content-Type: application/json
> Content-Length: 74

< HTTP/1.1 400 Bad Request
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 31
< ETag: W/"1f-5UCD7Mo+N/3efLKWpcXXUhOvGCw"
< Date: Thu, 30 Nov 2023 08:49:51 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

{"error":"user already exists"}
```

#### Authenticate a user

```
Request: POST /users/auth { email, password }
Response: 200 65684bc8dc4ef0943016343d
```

Examples:

```sh
$ curl -H 'Content-Type: application/json' -d '{ "email": "wendy@darling.com", "password": "123123123" }' localhost:4000/users/auth -v

> POST /users/auth HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Content-Type: application/json
> Content-Length: 57

< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 26
< ETag: W/"1a-4WuddfhLqLCLfYD8xDO24rc4iUU"
< Date: Thu, 30 Nov 2023 09:32:15 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5 

"65684bc8dc4ef0943016343d"
```

#### Retrieve a user

```
Request: GET /users 'Authorization: Bearer 65684bc8dc4ef0943016343d'
Response: 200 { name: 'Wendy Darling' }
```

Examples:

```sh
$ curl -H 'Authorization: Bearer 65684bc8dc4ef0943016343d' localhost:4000/users -v

> GET /users HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer 65684bc8dc4ef0943016343d

< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 24
< ETag: W/"18-H6g05DrIMPvuastpiUDi8ccTKPo"
< Date: Thu, 30 Nov 2023 09:45:01 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

{"name":"Wendy Darling"}
```