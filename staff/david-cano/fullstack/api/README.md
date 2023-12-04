# David Cano

## GitHub

[link](https://github.com/DCanoL)

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
$ curl -H 'Content-Type: application/json' -d '{ "name": "Wendy Darling", "email": "wendy@darling.com", "password": "123123123" }' -X POST localhost:4000/users -v

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
$ curl -H 'Content-Type: application/json' -d '{ "name": "Peter Pan", "email": "peter@pan.com", "password": "123123123" }' -X POST localhost:4000/users -v 

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
Response: 200 { userId: '65672ba9655f6f69eed56fd5' }
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
Request: GET /users 'Authorization: Bearer userId'
Response: 200 { name }
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

#### Create a post

```
Request: POST /posts 'Authorization: Bearer userId' { image, imageDescription, text }
Response: 201
```

Examples:

```sh
$ curl -H 'Authorization: Bearer 65684bc8dc4ef0943016343d' -H 'Content-Type: application/json' -d '{ "image": "https://thispersondoesnotexist.com", "imageDescription": "Unknown person", "text": "Who is this?" }' localhost:4000/posts -v

> POST /posts HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer 65684bc8dc4ef0943016343d
> Content-Type: application/json
> Content-Length: 111

< HTTP/1.1 201 Created
< X-Powered-By: Express
< Date: Thu, 30 Nov 2023 11:04:07 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Content-Length: 0
```

#### Retrieve posts

```
Request: GET /posts 'Authorization: Bearer userId'
Response: 200 [{ id, author: { id, name }, image, imageDescription, text, likes }]
```

Examples:

```sh
$ curl -H 'Authorization: Bearer 65684bc8dc4ef0943016343d' localhost:4000/posts -v

> GET /posts HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer 65684bc8dc4ef0943016343d

< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 215
< ETag: W/"d7-PRZmJ5Lq2PE/FsszvbsBF8gOBYI"
< Date: Thu, 30 Nov 2023 11:10:02 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

[{"author":{"name":"Wendy Darling","id":"65684bc8dc4ef0943016343d"},"image":"https://thispersondoesnotexist.com","imageDescription":"Unknown person","text":"Who is this?","likes":[],"id":"65686c275ef8e443ccc48336"}]
```

#### Toggle like post

```
Request: PATCH /posts/postId/likes 'Authorization: Bearer userId'
Response: 204
```

Examples:

```sh
$ curl -H 'Authorization: Bearer 65684bc8dc4ef0943016343d' -X PATCH localhost:4000/posts/65686c275ef8e443ccc48336/likes -v

> PATCH /posts/65686c275ef8e443ccc48336/likes HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer 65684bc8dc4ef0943016343d

< HTTP/1.1 204 No Content
< X-Powered-By: Express
< Date: Thu, 30 Nov 2023 11:27:40 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

#### Update UserPassword

````
Request: PATCH /users/password {userId, password, newPassword, repeatNewPassword}
Response: updated password

Examples:

```sh
$ curl -H 'Authorization: Bearer 656743c48dbd4d9b3e300c56' -H 'Content-Type: application/json' -d '{ "password": "456456456", "newPassword": "123123123", "repeatNewPassword": "123123123" }' -X PATCH localhost:4000/users/password -v
```

#### Update UserEmail

````
Request: PATCH /users/email {userId, email, newEmail, repeatNewEmail}
Response: updated email

Examples:

```sh
$ curl -H 'Authorization: Bearer 656743c48dbd4d9b3e300c56' -H 'Content-Type: application/json' -d '{ "password": "123123123", "email": "peter3@pan.com", "newEmail": "peter@pan.com", "repeatNewEmail": "peter@pan.com" }' -X PATCH localhost:4000/users/email -v

> PATCH /users/email HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer 656743c48dbd4d9b3e300c56
> Content-Type: application/json
> Content-Length: 118
> 
< HTTP/1.1 204 No Content
< X-Powered-By: Express
< Date: Fri, 01 Dec 2023 16:15:12 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 

```

