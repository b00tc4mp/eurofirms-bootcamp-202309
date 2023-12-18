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
Response: 200 userId
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

### Retrieve a user

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

### Create a post

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

### Retrieve posts

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

### Retrieve saved posts

```
Request: GET /posts/saved 'Authorization: Bearer userId'
Response: 200 [{ id, author: { id, name }, image, imageDescription, text, likes }]
```

Examples:

```sh
$ curl -H 'Authorization: Bearer 65684c87dc4ef0943016343f' localhost:4000/posts/saved -v

> GET /posts/saved HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer 65684c87dc4ef0943016343f

< HTTP/1.1 200 OK
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Methods: *
< Access-Control-Allow-Headers: *
< Content-Type: application/json; charset=utf-8
< Content-Length: 930
< ETag: W/"3a2-kdM6M48vIi1zRcdFmRpTew+Vm48"
< Date: Mon, 11 Dec 2023 11:47:30 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

[{"author":{"name":"Mar Mota","id":"656db3fad816cd234ffab874"},"image":"https://wallpapers.com/images/hd/cute-minion-happy-bob-v1x9tfcn0rznkvvd.jpg","imageDescription":"minion image","text":"hello minion","likes":[],"id":"656ef24d673674120e518540","liked":false,"saved":true},{"author":{"name":"Peter Pan","id":"65684c87dc4ef0943016343f"},"image":"https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2014/09/29/140929092057_mafalda_promo_624x351_joaquins.lavadoquino.jpg","imageDescription":"pedro image","text":"hola pedro!","likes":[],"id":"6571b4fb8d231365bd5e62d7","liked":false,"saved":true},{"author":{"name":"Peter Pan","id":"65684c87dc4ef0943016343f"},"image":"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Scooby-Doo.png/150px-Scooby-Doo.png","imageDescription":"scooby image","text":"hello scooby!","likes":["65684c87dc4ef0943016343f"],"id":"6571b5754fba0c76963acd33","liked":true,"saved":true}]
```

### Retrieve my posts

```
Request: GET /posts/mine 'Authorization: Bearer userId'
Response: 200 [{ id, author: { id, name }, image, imageDescription, text, likes }]
```

Examples:

```sh
$ curl -H 'Authorization: Bearer 65684c87dc4ef0943016343f' localhost:4000/posts/mine -v

> GET /posts/mine HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer 65684c87dc4ef0943016343f

< HTTP/1.1 200 OK
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Methods: *
< Access-Control-Allow-Headers: *
< Content-Type: application/json; charset=utf-8
< Content-Length: 655
< ETag: W/"28f-qixTT3H0KJQuMjDqV+l4TSLhIZg"
< Date: Mon, 11 Dec 2023 11:54:58 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

[{"author":{"name":"Peter Pan","id":"65684c87dc4ef0943016343f"},"image":"https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2014/09/29/140929092057_mafalda_promo_624x351_joaquins.lavadoquino.jpg","imageDescription":"pedro image","text":"hola pedro!","likes":[],"id":"6571b4fb8d231365bd5e62d7","liked":false,"saved":true},{"author":{"name":"Peter Pan","id":"65684c87dc4ef0943016343f"},"image":"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Scooby-Doo.png/150px-Scooby-Doo.png","imageDescription":"scooby image","text":"hello scooby!","likes":["65684c87dc4ef0943016343f"],"id":"6571b5754fba0c76963acd33","liked":true,"saved":true}]
```

### Toggle like post

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

### Toggle save post

```
Request: PATCH /posts/postId/saved 'Authorization: Bearer userId'
Response: 204
```

Examples:

```sh
$ curl -H 'Authorization: Bearer 65684bc8dc4ef0943016343d' -X PATCH localhost:4000/posts/65686c275ef8e443ccc48336/saved -v

> PATCH /posts/65686c275ef8e443ccc48336/saved HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer 65684bc8dc4ef0943016343d

< HTTP/1.1 204 No Content
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Methods: *
< Access-Control-Allow-Headers: *
< Date: Tue, 05 Dec 2023 11:06:18 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

### Delete post

```
Request: DELETE /posts/postId 'Authorization: Bearer userId'
Response: 204
```

Examples:

```sh
$ curl -H 'Authorization: Bearer 65684bc8dc4ef0943016343d' -X DELETE localhost:4000/posts/65686c275ef8e443ccc48336 -v

> DELETE /posts/65686c275ef8e443ccc48336 HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer 65684bc8dc4ef0943016343d

< HTTP/1.1 204 No Content
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Methods: *
< Access-Control-Allow-Headers: *
< Date: Mon, 11 Dec 2023 11:11:57 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

```sh
$ curl -H 'Authorization: Bearer 65684bc8dc4ef0943016343d' -X DELETE localhost:4000/posts/65686c275ef8e443ccc48336 -v

> DELETE /posts/65686c275ef8e443ccc48336 HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer 65684bc8dc4ef0943016343d

< HTTP/1.1 400 Bad Request
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Methods: *
< Access-Control-Allow-Headers: *
< Content-Type: application/json; charset=utf-8
< Content-Length: 26
< ETag: W/"1a-5+ZrVJxQInF12KySW9ol3Ua/ZF0"
< Date: Mon, 11 Dec 2023 11:12:56 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

{"error":"post not found"}
```

```sh
$ curl -H 'Authorization: Bearer 65684bc8dc4ef0943016343d' -X DELETE localhost:4000/posts/656eef3a673674120e51852e -v

> DELETE /posts/656eef3a673674120e51852e HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer 65684bc8dc4ef0943016343d
 
< HTTP/1.1 400 Bad Request
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Access-Control-Allow-Methods: *
< Access-Control-Allow-Headers: *
< Content-Type: application/json; charset=utf-8
< Content-Length: 40
< ETag: W/"28-MKl4+Ecpn7arIO2VXgLKBJ29K5k"
< Date: Mon, 11 Dec 2023 11:15:13 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

{"error":"post does not belong to user"}%
```

### Update user password

```
Request: PATCH /users/password { password, newPassword, repeatNewPassword } 'Authorization: Bearer userId'
Response: 204
```

Examples:

```sh
$ curl -H 'Authorization: Bearer 65684bc8dc4ef0943016343d' -H 'Content-Type: application/json' -d '{ "password": "123123123", "newPassword": "456456456", "repeatNewPassword": "456456456" }' -X PATCH localhost:4000/users/password -v

> PATCH /users/password HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer 65684bc8dc4ef0943016343d
> Content-Type: application/json
> Content-Length: 89

< HTTP/1.1 204 No Content
< X-Powered-By: Express
< Date: Mon, 04 Dec 2023 10:53:07 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

```sh
$ curl -H 'Authorization: Bearer 75684bc8dc4ef0943016343d' -H 'Content-Type: application/json' -d '{ "password": "123123123", "newPassword": "456456456", "repeatNewPassword": "456456456" }' -X PATCH localhost:4000/users/password -v

> PATCH /users/password HTTP/1.1
> Host: localhost:4000
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer 75684bc8dc4ef0943016343d
> Content-Type: application/json
> Content-Length: 89

< HTTP/1.1 400 Bad Request
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 26
< ETag: W/"1a-EGIcyP6BIiCXl5Gb1aph5CGf4VQ"
< Date: Mon, 04 Dec 2023 10:56:09 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

{"error":"user not found"}
```