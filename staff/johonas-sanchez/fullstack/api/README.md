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

### Register a user

```
Request: POST /users { name, email, password }
Response: 201
Response (error): 409|406|500 { error, message }
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

### Authenticate a user

```
Request: POST /users/auth { email, password }
Response: 200 token
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

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y"
```

### Create a post

```
Request: POST /posts 'Authorization: Bearer token' { image, imageDescription, text }
Response: 201
```

Examples:

```sh
$ curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y' -H 'Content-Type: application/json' -d '{ "image": "https://thispersondoesnotexist.com", "imageDescription": "Unknown person", "text": "Who is this?" }' localhost:4000/posts -v

> POST /posts HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y
> Content-Type: application/json
> Content-Length: 111

< HTTP/1.1 201 Created
< X-Powered-By: Express
< Date: Thu, 30 Nov 2023 11:04:07 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Content-Length: 0
```

### Retrieve posts

```
Request: GET /posts 'Authorization: Bearer token'
Response: 200 [{ id, author: { id, name }, image, imageDescription, text, likes }]
```

Examples:

```sh
$ curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y' localhost:4000/posts -v

> GET /posts HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y

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

### Retrieve post

```
Request: GET /posts/:postId 'Authorization: Bearer token'
Response: 200 { id, author: { id, name }, image, imageDescription, text, likes }
```

Examples:

```sh
$ curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y' localhost:4000/posts/656def1b6fc21579c1675e11/user -v

> GET /posts/656def1b6fc21579c1675e11/user HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Methods: *
< Access-Control-Allow-Headers: *
< Content-Type: application/json; charset=utf-8
< Content-Length: 249
< ETag: W/"f9-C+SSPb/2r2zeAADO+1zcEn3Tsuc"
< Date: Mon, 04 Dec 2023 16:48:20 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

{"author":{"name":"Ga Yo","id":"656ddc296fc21579c1675d6e"},"image":"https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg","imageDescription":"bat image 1","text":"hello iron 1 fetch","likes":[],"id":"656def1b6fc21579c1675e11"}
```

### Toggle like post

```
Request: PATCH /posts/postId/likes 'Authorization: Bearer token'
Response: 204
```

Examples:

```sh
$ curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y' -X PATCH localhost:4000/posts/65686c275ef8e443ccc48336/likes -v

> PATCH /posts/65686c275ef8e443ccc48336/likes HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y

< HTTP/1.1 204 No Content
< X-Powered-By: Express
< Date: Thu, 30 Nov 2023 11:27:40 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

### Delete post

```
Request: DELETE /posts/:postId 'Authorization: Bearer token'
Response: 204
```

Examples:

```sh
$ curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y' -X DELETE localhost:4000/posts/65689bdc98bc3e457d53271e -v

> DELETE /posts/65689bdc98bc3e457d53271e HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y
>
< HTTP/1.1 204 No Content
< X-Powered-By: Express
< Date: Sun, 03 Dec 2023 08:32:25 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

### Retrieve a user

```
Request: GET /users 'Authorization: Bearer token'
Response: 200 { name }
```

Examples:

```sh
$ curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y' localhost:4000/users -v

> GET /users HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y

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

### Retrieve a post

```
Request: GET /posts/postId 'Authorization: Bearer token'
Response: 200 { post }
```

Examples:

```sh
$ curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y' localhost:4000/posts/656def1b6fc21579c1675e11 -v

> GET /posts/656def1b6fc21579c1675e11 HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y

< HTTP/1.1 200 OK
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Methods: *
< Access-Control-Allow-Headers: *
< Content-Type: application/json; charset=utf-8
< Content-Length: 249
< ETag: W/"f9-C+SSPb/2r2zeAADO+1zcEn3Tsuc"
< Date: Mon, 04 Dec 2023 17:03:13 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

{"author":{"name":"Ga Yo","id":"656ddc296fc21579c1675d6e"},"image":"https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg","imageDescription":"bat image 1","text":"hello iron 1 fetch","likes":[],"id":"656def1b6fc21579c1675e11"}
```

### Retrieve my posts

```
Request: GET /posts/user 'Authorization: Bearer token'
Response: 200 [{ id, author: { id, name }, image, imageDescription, text, likes }]
```

Examples:

```sh
$ curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y' localhost:4000/posts/user -v

> GET /posts/user HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y

< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 207
< ETag: W/"cf-UNwYTAOetjKJu8cz2p7+Auij3eo"
< Date: Fri, 01 Dec 2023 16:58:15 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

[{"author":{"name":"peter","id":"656748b08dbd4d9b3e300c5a"},"image":"https://thispersondoesnotexist.com","imageDescription":"Unknown person","text":"Who is this?","likes":[],"id":"65689bdc98bc3e457d53271e"}]
```

### Toggle save post

```
Request: PATCH /posts/postId/saved 'Authorization: Bearer token'
Response: 204
```

Examples:

```sh
$ curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y' -X PATCH localhost:4000/posts/6571ce86762f93848c19f7c2/saved -v

> PATCH /posts/65686c275ef8e443ccc48336/saved HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y

< HTTP/1.1 204 No Content
< X-Powered-By: Express
< Date: Thu, 30 Nov 2023 11:27:40 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

### Retrieve saved posts

```
Request: GET /posts/saved 'Authorization: Bearer token'
Response: 200 [{ id, author: { id, name }, image, imageDescription, text, likes }]
```

Examples:

```sh
$ curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y' localhost:4000/posts/saved -v

> GET /posts/saved HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 207
< ETag: W/"cf-UNwYTAOetjKJu8cz2p7+Auij3eo"
< Date: Sun, 03 Dec 2023 08:15:54 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

[{"author":{"name":"peter","id":"656748b08dbd4d9b3e300c5a"},"image":"https://thispersondoesnotexist.com","imageDescription":"Unknown person","text":"Who is this?","likes":[],"id":"65689bdc98bc3e457d53271e"}]
```

### Update UserPassword

```
Request: PATCH /users/password {password, newPassword, repeatNewPassword} 'Authorization: Bearer token'
Response: updated password
```

Examples:

```sh
$ curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y' -H 'Content-Type: application/json' -d '{ "password": "456456456", "newPassword": "123123123", "repeatNewPassword": "123123123" }' -X PATCH localhost:4000/users/password -v

> PATCH /users/password HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y
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

### Update UserEmail

```
Request: PATCH /users/email {userId, email, newEmail, repeatNewEmail} 'Authorization: Bearer token'
Response: updated email
```

Examples:

```sh
$ curl -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y' -H 'Content-Type: application/json' -d '{ "password": "123123123", "email": "peter3@pan.com", "newEmail": "peter@pan.com", "repeatNewEmail": "peter@pan.com" }' -X PATCH localhost:4000/users/email -v

> PATCH /users/email HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkZGMyOTZmYzIxNTc5YzE2NzVkNmUiLCJpYXQiOjE3MDI1NTkyNTJ9.lAZHnQWV7DrHYmbgh-FGBklAMfcs9nv6IezuU6sog0Y
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
